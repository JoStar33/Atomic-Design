import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';

export default {
  title: '컴포넌트/아토믹/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args}/>;

export const InputTest = Template.bind({});
InputTest.args = {
  label: "테스트"
}

export const PasswordInputTest = Template.bind({});
PasswordInputTest.args = {
  label: "비밀번호",
  isPassword: true
}