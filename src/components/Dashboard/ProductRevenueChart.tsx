import React from 'react';
import { IChartConfig, LineChart, ILineChartProps } from '@gooddata/sdk-ui-charts';

import * as Md from '../../md/full';

type ProductRevenueChartProps = {
  filters?: ILineChartProps['filters'];
};

const chartConfig: IChartConfig = { legend: { position: 'bottom' } };

export const ProductRevenueChart: React.FC<ProductRevenueChartProps> = ({ filters }) => {
  return (
    <LineChart
      measures={[Md.Revenue]}
      segmentBy={Md.Product.Default}
      trendBy={Md.DateDatasets.Date.Month.Short}
      filters={filters}
      config={chartConfig}
    />
  );
};
