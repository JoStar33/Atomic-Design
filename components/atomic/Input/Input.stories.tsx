import { Meta, StoryFn } from '@storybook/react';
import Input from '../Input/Input';

export default {
  title: '컴포넌트/아토믹/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = () => <Input/>;

export const InputTest = Template.bind({});