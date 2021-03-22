import Article from '../components/Article';

const Story = (props) => <Article {...props} />

export const SampleArticle = Story.bind({})

export default {
  title: 'Article',
  component: Article,
  argTypes: {
    testControl: { control: 'boolean' },
  },
};