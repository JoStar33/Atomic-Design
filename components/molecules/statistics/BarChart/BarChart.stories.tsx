import { Meta, StoryFn } from "@storybook/react";
import BarChart from "./BarChart";

export default {
  title: "컴포넌트/분자/통계/BarChart",
  component: BarChart,
} as Meta<typeof BarChart>;

const Template: StoryFn<typeof BarChart> = (args) => <BarChart {...args} />;

export const BarChartTest = Template.bind({});
BarChartTest.args = {
  chartTitle: "연령별 이용자",
  barChart: [
    {
      label: "0~9세",
      value: 0,
    },
    {
      label: "10~20세",
      value: 40,
    },
    {
      label: "20~30세",
      value: 60,
    },
    {
      label: "30~40세",
      value: 70,
    },
    {
      label: "40~50세",
      value: 90,
    },
    {
      label: "50~60세",
      value: 60,
    },
  ],
};
