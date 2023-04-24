import { Meta, StoryFn } from '@storybook/react';
import MinusButton from './MinusButton';

export default {
  title: '컴포넌트/아토믹/버튼/MinusButton',
  component: MinusButton,
} as Meta<typeof MinusButton>;

const Template: StoryFn<typeof MinusButton> = (args) => <MinusButton {...args}/>;

export const MinusButtonTest = Template.bind({});
