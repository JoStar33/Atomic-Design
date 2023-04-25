import { Meta, StoryFn } from '@storybook/react';
import StarScoreForm from './StarScoreForm';

export default {
  title: '컴포넌트/조직/일반/StarScoreForm',
  component: StarScoreForm,
} as Meta<typeof StarScoreForm>;

const Template: StoryFn<typeof StarScoreForm> = () => <StarScoreForm/>;

export const StarScoreFormTest = Template.bind({});