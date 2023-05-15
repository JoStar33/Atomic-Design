import { ChartModel } from "@/types/statistics";
import { randomBrightColor } from "./randomBrightColor";

const makeMultChartDataForm = (chartModel: ChartModel[], modelName: string) => {
  const chartColor = randomBrightColor();
  return {
    label: modelName,
    data: chartModel.map((model) => model.value),
    borderColor: chartColor,
    backgroundColor: chartColor,
  };
};

export default makeMultChartDataForm;