import { Meta, StoryFn } from '@storybook/react';
import MovieCard from './MovieCard';

export default {
  title: '컴포넌트/분자/카드/MovieCard',
  component: MovieCard,
} as Meta<typeof MovieCard>;

const Template: StoryFn<typeof MovieCard> = (args) => <MovieCard {...args}/>;

export const MovieCardTest = Template.bind({});
MovieCardTest.args = {
  movie: {
    id: "", 
    name: "죠죠", 
    star: 23, 
    image: "https://upload.wikimedia.org/wikipedia/en/f/f7/JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg"
  },
  textColor: ""
}