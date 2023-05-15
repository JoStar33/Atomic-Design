import { Meta, StoryFn } from '@storybook/react';
import DoughnutChart from './DoughnutChart';

export default {
  title: '컴포넌트/분자/통계/DoughnutChart',
  component: DoughnutChart,
} as Meta<typeof DoughnutChart>;

const Template: StoryFn<typeof DoughnutChart> = (args) => <DoughnutChart {...args}/>;

export const DoughnutChartTest = Template.bind({});
DoughnutChartTest.args = {
  doughnutChart: [
    {
      label: "구매할 마음이 있다.",
      value: 70
    },
    {
      label: "마음에 안내킨다.",
      value: 40
    },
    {
      label: "별 생각이 없다.",
      value: 30
    }
  ]
}