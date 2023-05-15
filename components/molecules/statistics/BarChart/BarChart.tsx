import { ChartModel } from "@/types/statistics";
import makeChartDataForm from "@/utils/makeChartDataForm";
import { randomBrightColor } from "@/utils/randomBrightColor";
import 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import styles from './barchart.module.scss';

interface Props {
  barChart: ChartModel[];
  chartTitle: string;
}

const BarChart = ({ barChart, chartTitle }: Props) => {
  const chartData = makeChartDataForm(barChart, chartTitle, [randomBrightColor()]);
  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  };
  return (
    <div className={styles.chart_container}>
      <Bar data={chartData} options={options}/>
    </div>
  );
};

export default BarChart;