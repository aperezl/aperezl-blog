import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'data')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort(sortedPosts)
  return posts
}

export function getAllPostsByTag(tag, fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .filter(post => ( post.tags && post.tags.includes(tag)))
    .sort(sortedPosts)
  
  return posts
}


function sortedPosts(post1, post2) {
  return (post1.featured ? -1 : post1.date > post2.date ? -1 : 1)
}

export function getAllTags() {
  const posts = getAllPosts(['tags'])
  return posts
    .flatMap(tag => tag.tags)
    .filter(tag => tag !== undefined)
}