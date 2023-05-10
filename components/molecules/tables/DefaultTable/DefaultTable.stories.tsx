import { Meta, StoryFn } from '@storybook/react';
import DefaultTable from './DefaultTable';

export default {
  title: '컴포넌트/분자/테이블/DefaultTable',
  component: DefaultTable,
} as Meta<typeof DefaultTable>;

const Template: StoryFn<typeof DefaultTable> = (args) => <DefaultTable {...args}/>;

const initTableRows = [
  {
    id: "23",
    title: "안녕",
    content: "내용입니다.",
    information: "정보입니다."
  }
]

export const DefaultTableTest = Template.bind({});
DefaultTableTest.args = {
  tableData: {
    tableHeader: {
      title: "제목",
      content: "내용",
      information: "정보"
    },
    tableRow: initTableRows
  }
}

export const DefaultTableClickTest = Template.bind({});
DefaultTableClickTest.args = {
  tableData: {
    tableHeader: {
      title: "제목",
      content: "내용",
      information: "정보"
    },
    tableRow: initTableRows
  },
  rowClick: (id: string) => {
    console.log(id);
  }
}