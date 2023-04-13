import { Meta, StoryFn } from '@storybook/react';
import CloseButton from './CloseButton';

export default {
  title: '컴포넌트/아토믹/CloseButton',
  component: CloseButton,
} as Meta<typeof CloseButton>;

const Template: StoryFn<typeof CloseButton> = (args) => <div className='w-96 h-96 relative bg-slate-300'><CloseButton {...args}/></div>;

export const CloseButtonTest = Template.bind({});
