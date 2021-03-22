import Header from '../components/Header';

const Story = (props) => <Header {...props} />

export const SampleHeader = Story.bind({})

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    testControl: { control: 'boolean' },
  },
};