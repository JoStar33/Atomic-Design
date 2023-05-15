interface ChartModel {
  label: string;
  value: number;
}

interface LineChartModel {
  modelName: string;
  chartModel: ChartModel[];
}

export type { ChartModel, LineChartModel };

