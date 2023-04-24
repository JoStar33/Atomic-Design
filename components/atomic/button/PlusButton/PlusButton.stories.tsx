import { Meta, StoryFn } from '@storybook/react';
import PlusButton from './PlusButton';

export default {
  title: '컴포넌트/아토믹/버튼/PlusButton',
  component: PlusButton,
} as Meta<typeof PlusButton>;

const Template: StoryFn<typeof PlusButton> = (args) => <PlusButton {...args}/>;

export const PlusButtonTest = Template.bind({});
