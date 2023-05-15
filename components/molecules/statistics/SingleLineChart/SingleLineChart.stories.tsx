import { Meta, StoryFn } from '@storybook/react';
import SingleLineChart from './SingleLineChart';

export default {
  title: '컴포넌트/분자/통계/SingleLineChart',
  component: SingleLineChart,
} as Meta<typeof SingleLineChart>;

const Template: StoryFn<typeof SingleLineChart> = (args) => <SingleLineChart {...args}/>;

export const SingleLineChartTest = Template.bind({});
SingleLineChartTest.args = {
  chartTitle: "달별 수입",
  lineChart: [
    {
      label: "1월",
      value: 50
    },
    {
      label: "2월",
      value: 40
    },
    {
      label: "3월",
      value: 30
    },
    {
      label: "4월",
      value: 30
    },
    {
      label: "5월",
      value: 60
    },
    {
      label: "6월",
      value: 80
    }
  ]
}