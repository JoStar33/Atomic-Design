import { LineChartModel } from "@/types/statistics";
import makeMultChartDataForm from "@/utils/makeMultChartDataForm";
import 'chart.js/auto';
import { Line } from "react-chartjs-2";
import styles from "./multi_line_chart.module.scss";

interface Props {
  multiChartModel: LineChartModel[];
}

const MultiLineChart = ({ multiChartModel }: Props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };
  const labels = multiChartModel[0].chartModel.map((model) => model.label);

  const data = {
    labels,
    datasets: multiChartModel.map((chartModel) =>
      makeMultChartDataForm(chartModel.chartModel, chartModel.modelName)
    ),
  };

  return (
    <div className={styles.chart_container}>
      <Line data={data} options={options} />
    </div>
  );
};

export default MultiLineChart;
