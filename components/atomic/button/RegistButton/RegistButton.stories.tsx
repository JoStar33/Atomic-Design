import { Meta, StoryFn } from '@storybook/react';
import RegistButton from './RegistButton';

export default {
  title: '컴포넌트/아토믹/버튼/RegistButton',
  component: RegistButton,
} as Meta<typeof RegistButton>;

const Template: StoryFn<typeof RegistButton> = (args) => <RegistButton {...args}/>

export const RegistButtonTest = Template.bind({});
RegistButtonTest.args = {
  text: "등록하기"
}