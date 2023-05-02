import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import ValidateInput from './ValidateInput';

export default {
  title: '컴포넌트/아토믹/인풋/ValidateInput',
  component: ValidateInput,
} as Meta<typeof ValidateInput>;

const Template: StoryFn<typeof ValidateInput> = (args) => 
{
  const [value, setValue] = useState<string>("");

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  return <ValidateInput {...args} value={value} handleChangeValue={handleChangeValue}/>;
}


export const PasswordValidateInputTest = Template.bind({});
PasswordValidateInputTest.args = {
  label: "비밀번호",
  type: "password"
}
export const EmailValidateInputTest = Template.bind({});
EmailValidateInputTest.args = {
  label: "이메일",
  type: "email"
}