import { Meta, StoryFn } from '@storybook/react';
import CounterForm from './CounterForm';

export default {
  title: '컴포넌트/조직/일반/CounterForm',
  component: CounterForm,
} as Meta<typeof CounterForm>;

const Template: StoryFn<typeof CounterForm> = () => <CounterForm/>;

export const CounterFormTest = Template.bind({});