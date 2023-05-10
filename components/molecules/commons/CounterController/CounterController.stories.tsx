import { Meta, StoryFn } from '@storybook/react';
import CounterController from './CounterController';

export default {
  title: '컴포넌트/분자/일반/CounterController',
  component: CounterController,
} as Meta<typeof CounterController>;

const Template: StoryFn<typeof CounterController> = () => <CounterController/>;

export const CounterControllerTest = Template.bind({});