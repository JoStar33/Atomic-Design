import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: '컴포넌트/아토믹/버튼/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}/>;

export const ButtonTest = Template.bind({});
ButtonTest.args = {
  label: "버튼"
}

export const ButtonLongTextTest = Template.bind({});
ButtonLongTextTest.args = {
  label: "버튼입니다. 길게 해볼게요"
}