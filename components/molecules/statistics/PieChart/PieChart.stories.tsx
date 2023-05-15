import { Meta, StoryFn } from '@storybook/react';
import PieChart from './PieChart';

export default {
  title: '컴포넌트/분자/통계/PieChart',
  component: PieChart,
} as Meta<typeof PieChart>;

const Template: StoryFn<typeof PieChart> = (args) => <PieChart {...args}/>;

export const PieChartTest = Template.bind({});
PieChartTest.args = {
  pieChart: [
    {
      label: "USA",
      value: 50
    },
    {
      label: "China",
      value: 40
    },
    {
      label: "Japan",
      value: 30
    }
  ]
}