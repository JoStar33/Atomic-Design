import useColorGenerator from '@/hooks/statistics/useColorGenerator';
import { ChartModel } from '@/types/statistics';
import makeChartDataForm from '@/utils/makeChartDataForm';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import styles from './doughnut_chart.module.scss';

interface Props {
  doughnutChart: ChartModel[];
  chartTitle: string;
}

const DoughnutChart = ({doughnutChart, chartTitle}: Props) => {
  const { randomColors } = useColorGenerator(doughnutChart.length);
  const chartData = makeChartDataForm(doughnutChart, chartTitle, randomColors);
  return (
    <div className={styles.chart_container}>
      <Doughnut data={chartData}/>
    </div>
  );
};

export default DoughnutChart;