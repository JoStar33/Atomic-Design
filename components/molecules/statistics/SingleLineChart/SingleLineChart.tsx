import { ChartModel } from '@/types/statistics';
import makeChartDataForm from '@/utils/makeChartDataForm';
import { randomBrightColor } from '@/utils/randomBrightColor';
import 'chart.js/auto';
import { Line } from "react-chartjs-2";
import styles from './single_line_chart.module.scss';

interface Props {
  lineChart: ChartModel[];
  chartTitle: string;
}

const LineChart = ({lineChart, chartTitle}: Props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    },
  };
  const chartData = makeChartDataForm(lineChart, chartTitle, [randomBrightColor()]);
  return (
    <div className={styles.chart_container}>
      <Line data={chartData} options={options}/>
    </div>
  );
};

export default LineChart;