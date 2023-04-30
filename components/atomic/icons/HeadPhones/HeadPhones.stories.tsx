import { Meta, StoryFn } from '@storybook/react';
import HeadPhones from './HeadPhones';

export default {
  title: '컴포넌트/아토믹/아이콘/HeadPhones',
  component: HeadPhones,
} as Meta<typeof HeadPhones>;

const Template: StoryFn<typeof HeadPhones> = () => 
<div style={{width: "1000px", height: "1000px", display: "flex", alignItems: "center", justifyContent: "center"}}>
  <HeadPhones/>
</div>;

export const HeadPhonesTest = Template.bind({});
HeadPhonesTest.args = {
}