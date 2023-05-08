import { FormSubmitValue } from '@/types/form';
import { Meta, StoryFn } from '@storybook/react';
import MultiForm from './MultiForm';

export default {
  title: '컴포넌트/아토믹/폼/MultiForm',
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
    },
    {
      type: "password",
      name: "password",
      label: "패스워드",
    },
    {
      type: "text",
      name: "name",
      label: "성명",
    }
  ],
  actionSubmit: (data: FormSubmitValue) => {
    console.log(data);
    alert(JSON.stringify(data));
  },
  buttonText: "등록"
}