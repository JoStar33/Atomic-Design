import { Meta, StoryFn } from '@storybook/react';
import MultiForm from './MultiValidateForm';

export default {
  title: '컴포넌트/아토믹/폼/MultiValidateForm',
  component: MultiForm,
} as Meta<typeof MultiForm>;

const Template: StoryFn<typeof MultiForm> = (args) => <MultiForm {...args}/>;

export const MultiFormTest = Template.bind({});
MultiFormTest.args = {
  formModel: [
    {
      type: "text",
      name: "email",
      label: "이메일",
      validate: {
        required: "비밀번호는 필수 입력입니다.",
        minLength: {
          value: 8,
          message: "8자리 이상 비밀번호를 사용하세요.",
        },
      }
    },
    {
      type: "password",
      name: "password",
      label: "패스워드",
      validate: {
        required: "비밀번호는 필수 입력입니다.",
        minLength: {
          value: 8,
          message: "8자리 이상 비밀번호를 사용하세요.",
        },
      }
    },
    {
      type: "text",
      name: "name",
      label: "성명",
      validate: {
        required: "비밀번호는 필수 입력입니다.",
        minLength: {
          value: 8,
          message: "8자리 이상 비밀번호를 사용하세요.",
        },
      }
    }
  ]
}