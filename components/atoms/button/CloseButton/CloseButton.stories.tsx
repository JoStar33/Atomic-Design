import { Meta, StoryFn } from '@storybook/react';
import CloseButton from './CloseButton';

export default {
  title: '컴포넌트/아토믹/버튼/CloseButton',
  component: CloseButton,
} as Meta<typeof CloseButton>;

const Template: StoryFn<typeof CloseButton> = (args) => <div style={{width: "300px", height: "300px", backgroundColor: "skyblue", position: "relative"}}><CloseButton {...args}/></div>;

export const CloseButtonTest = Template.bind({});
