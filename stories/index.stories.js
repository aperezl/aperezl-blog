import Home from '../pages/index';

const Story = (props) => <Home {...props} />

export const EmptyHomeStory = Story.bind({})

export default {
  title: 'Home',
  component: Home,
  argTypes: {
    testControl: { control: 'boolean' },
  },
};