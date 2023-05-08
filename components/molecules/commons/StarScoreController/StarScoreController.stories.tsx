import { Meta, StoryFn } from '@storybook/react';
import StarScoreController from './StarScoreController';

export default {
  title: '컴포넌트/조직/일반/StarScoreController',
  component: StarScoreController,
} as Meta<typeof StarScoreController>;

const Template: StoryFn<typeof StarScoreController> = () => <StarScoreController/>;

export const StarScoreControllerTest = Template.bind({});