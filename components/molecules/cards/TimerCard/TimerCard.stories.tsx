import { Meta, StoryFn } from '@storybook/react';
import TimerCard from './TimerCard';

export default {
  title: '컴포넌트/분자/카드/TimerCard',
  component: TimerCard,
} as Meta<typeof TimerCard>;

const Template: StoryFn<typeof TimerCard> = () => <TimerCard/>;

export const TimerCardTest = Template.bind({});