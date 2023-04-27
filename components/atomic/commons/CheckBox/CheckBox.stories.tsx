import { Meta, StoryFn } from '@storybook/react';
import CheckBox from './CheckBox';

export default {
  title: '컴포넌트/아토믹/일반/CheckBox',
  component: CheckBox,
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args}/>;

export const CheckBoxTest = Template.bind({});
CheckBoxTest.args = {
  label: "동의"
}
