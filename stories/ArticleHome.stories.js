import ArticleHome from '../components/ArticleHome';

const Story = (props) => <ArticleHome {...props} />

export const SampleArticleHome = Story.bind({})

export default {
  title: 'ArticleHome',
  component: ArticleHome,
  argTypes: {
    testControl: { control: 'boolean' },
  },
};