import { ChartModel } from "@/types/statistics";

const makeChartDataForm = (chartModel: ChartModel[], chartTitle: string, randomColors: string[]) => {
  return {
    labels: chartModel.map((chartElement) => {
      return chartElement.label;
    }),
    datasets: [{
      label: chartTitle,
      data: chartModel.map((chartElement) => {
        return chartElement.value;
      }),
      backgroundColor: randomColors,
      borderColor: randomColors,
      borderWidth: 1
    }]
  }
}

export default makeChartDataForm;