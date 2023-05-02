import { Meta, StoryFn } from '@storybook/react';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import MenuButton from './MenuButton';

export default {
  title: '컴포넌트/아토믹/버튼/MenuButton',
  component: MenuButton,
} as Meta<typeof MenuButton>;

const Template: StoryFn<typeof MenuButton> = (args) => <MenuButton {...args}/>;

export const MenuButtonTest = Template.bind({});
MenuButtonTest.args = {
  icon: <FaUserAlt/>,
  label: "사용자 정보"
};

export const HomeButtonTest = Template.bind({});
HomeButtonTest.args = {
  icon: <AiFillHome/>,
  label: "홈으로"
};
