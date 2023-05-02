import { Meta, StoryFn } from '@storybook/react';
import UserIcon from './UserIcon';

export default {
  title: '컴포넌트/아토믹/아이콘/UserIcon',
  component: UserIcon,
} as Meta<typeof UserIcon>;

const Template: StoryFn<typeof UserIcon> = (args) => <UserIcon {...args}/>;

export const UserIconTest = Template.bind({});
UserIconTest.args = {
  image: "https://upload.wikimedia.org/wikipedia/en/f/f7/JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg"
}