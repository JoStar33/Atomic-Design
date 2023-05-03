import { Meta, StoryFn } from '@storybook/react';
import { AiFillFolder, AiFillHome } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';
import TopMenuBar from './TopMenuBar';

export default {
  title: '컴포넌트/조직/바/TopMenuBar',
  component: TopMenuBar,
} as Meta<typeof TopMenuBar>;

const Template: StoryFn<typeof TopMenuBar> = (args) => <TopMenuBar {...args}/>;

export const TopMenuBarTest = Template.bind({});
TopMenuBarTest.args = {
  menu: [{
    id: "1", 
    icon: <AiFillHome/>, 
    label: "홈으로",
    click: () => {}
  }, {
    id: "2", 
    icon: <AiFillFolder/>, 
    label: "파일조회",
    click: () => {}
  }, {
    id: "3",
    icon: <DiReact/>,
    label: "리액트",
    click: () => {}
  }]
}
