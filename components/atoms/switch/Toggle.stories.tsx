import { Meta, StoryFn } from '@storybook/react';
import Toggle from './Toggle';

export default {
  title: '컴포넌트/아토믹/스위치/Toggle',
  component: Toggle,
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = (args) => <Toggle {...args}/>;

export const ToggleTest = Template.bind({});