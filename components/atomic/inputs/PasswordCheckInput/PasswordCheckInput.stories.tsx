import { Meta, StoryFn } from '@storybook/react';
import PasswordCheckInput from './PasswordCheckInput';

export default {
  title: '컴포넌트/아토믹/인풋/PasswordCheckInput',
  component: PasswordCheckInput,
} as Meta<typeof PasswordCheckInput>;

const Template: StoryFn<typeof PasswordCheckInput> = (args) => <PasswordCheckInput {...args}/>;

export const PasswordCheckInputTest = Template.bind({});
PasswordCheckInputTest.args = {
  label: "비밀번호 확인",
  value: "wuiegbh12%",
  checkValue: ""
}