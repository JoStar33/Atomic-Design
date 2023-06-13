import { Meta, StoryFn } from '@storybook/react';
import MoviePage from './index.page';

export default {
  title: '페이지/영화/MoviePage',
  component: MoviePage,
} as Meta<typeof MoviePage>;

const Template: StoryFn<typeof MoviePage> = () => <MoviePage />;

export const MoviePageTest = Template.bind({});