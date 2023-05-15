import { Meta, StoryFn } from '@storybook/react';
import MultiLineChart from './MultiLineChart';

export default {
  title: '컴포넌트/분자/통계/MultiLineChart',
  component: MultiLineChart,
} as Meta<typeof MultiLineChart>;

const Template: StoryFn<typeof MultiLineChart> = (args) => <MultiLineChart {...args}/>;

export const MultiLineChartTest = Template.bind({});
MultiLineChartTest.args = {
  multiChartModel: [
    {
      modelName: "이오원 사원",
      chartModel: [
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
    },
    {
      modelName: "김재희 사원",
      chartModel: [
        {
          label: "1월",
          value: 20
        },
        {
          label: "2월",
          value: 30
        },
        {
          label: "3월",
          value: 40
        },
        {
          label: "4월",
          value: 60
        },
        {
          label: "5월",
          value: 80
        },
        {
          label: "6월",
          value: 100
        }
      ]
    }
  ]
}