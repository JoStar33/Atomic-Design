import { Meta, StoryFn } from '@storybook/react';
import TableHeader from './TableHeader';

export default {
  title: '컴포넌트/아토믹/테이블/TableHeader',
  component: TableHeader,
} as Meta<typeof TableHeader>;

const Template: StoryFn<typeof TableHeader> = (args) => <TableHeader {...args}/>;

export const TableHeaderTest = Template.bind({});
TableHeaderTest.args = {
  header: {
    title: "제목",
    content: "내용",
    information: "정보"
  }
}