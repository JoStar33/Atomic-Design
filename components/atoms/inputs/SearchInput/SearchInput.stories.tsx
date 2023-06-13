import { Meta, StoryFn } from '@storybook/react';
import SearchInput from './SearchInput';

export default {
  title: '컴포넌트/아토믹/인풋/SearchInput',
  component: SearchInput,
} as Meta<typeof SearchInput>;

const Template: StoryFn<typeof SearchInput> = (args) => <SearchInput {...args}/>;

export const SearchInputTest = Template.bind({});
SearchInputTest.args = {
  handleClick: () => {}
}