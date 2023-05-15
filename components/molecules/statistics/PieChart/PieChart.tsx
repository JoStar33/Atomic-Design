import useColorGenerator from "@/hooks/statistics/useColorGenerator";
import { ChartModel } from "@/types/statistics";
import makeChartDataForm from "@/utils/makeChartDataForm";
import 'chart.js/auto';
import { Pie } from "react-chartjs-2";
import styles from './pie_chart.module.scss';

interface Props {
  pieChart: ChartModel[];
  chartTitle: string;
}

const PieChart = ({ pieChart, chartTitle }: Props) => {
  const { randomColors } = useColorGenerator(pieChart.length);
  const chartData = makeChartDataForm(pieChart, chartTitle, randomColors);
  return (
    <div className={styles.chart_container}>
      <Pie data={chartData}/>
    </div>
  );
};

export default PieChart;