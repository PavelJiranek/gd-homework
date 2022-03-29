import React from 'react';
import { IChartConfig, LineChart } from '@gooddata/sdk-ui-charts';

import * as Md from '../../md/full';

const chartConfig: IChartConfig = { legend: { position: 'bottom' } };

export const ProductRevenueChart: React.FC = () => {
  return (
    <LineChart
      measures={[Md.Revenue]}
      segmentBy={Md.Product.Default}
      trendBy={Md.DateDatasets.Date.Month.Short}
      config={chartConfig}
    />
  );
};
