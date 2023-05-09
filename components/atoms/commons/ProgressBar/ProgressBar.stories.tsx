import { Meta, StoryFn } from '@storybook/react';
import ProgressBar from './ProgressBar';

export default {
  title: '컴포넌트/아토믹/일반/ProgressBar',
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => <ProgressBar {...args}/>;

export const ProgressBarTest = Template.bind({});
ProgressBarTest.args = {
  label: "진행상황",
  value: "70"
}