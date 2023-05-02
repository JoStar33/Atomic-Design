import { Meta, StoryFn } from '@storybook/react';
import ShareButton from './ShareButton';

export default {
  title: '컴포넌트/아토믹/버튼/ShareButton',
  component: ShareButton,
} as Meta<typeof ShareButton>;

const Template: StoryFn<typeof ShareButton> = () => <ShareButton/>;

export const ShareButtonTest = Template.bind({});
