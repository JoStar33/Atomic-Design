import { Meta, StoryFn } from '@storybook/react';
import TableRow from './TableRow';

export default {
  title: '컴포넌트/아토믹/테이블/TableRow',
  component: TableRow,
} as Meta<typeof TableRow>;

const Template: StoryFn<typeof TableRow> = (args) => <TableRow {...args}/>;

export const TableRowTest = Template.bind({});
TableRowTest.args = {
  row: {
    title: "안녕",
    content: "내용입니다.",
    information: "정보입니다."
  }
}