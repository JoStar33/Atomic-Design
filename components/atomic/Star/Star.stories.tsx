import { Meta, StoryFn } from '@storybook/react';
import Star from './Star';

export default {
  title: '컴포넌트/아토믹/Star',
  component: Star,
} as Meta<typeof Star>;

const Template: StoryFn<typeof Star> = (args) => <Star {...args}/>;

export const Score1StarTest = Template.bind({});
Score1StarTest.args = {
  score: 1
}

export const ScoreHalfStarTest = Template.bind({});
ScoreHalfStarTest.args = {
  score: 0.5
}

export const Score0StarTest = Template.bind({});
Score0StarTest.args = {
  score: 0
}