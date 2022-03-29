import React, { useCallback, useMemo, useState } from 'react';
import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import { LoadingComponent, useExecutionDataView } from '@gooddata/sdk-ui';
import { IFilter, newRankingFilter, RankingFilterOperator } from '@gooddata/sdk-model';

import * as Md from '../../md/full';
import { getRevenue } from './productRevenueUtils';

type ProductRevenueChartProps = {
  filters: IFilter[];
};

const styles = {
  container: { height: '100%', justifyContent: 'space-around' },
  revenueWrapper: { textAlign: 'center', minHeight: 100 },
  select: { marginY: 2 },
};

export const ProductRevenueCard: React.FC<ProductRevenueChartProps> = ({ filters }) => {
  const [revenueType, setRevenueType] = useState<RankingFilterOperator>('TOP');
  const { status, result } = useExecutionDataView(
    {
      execution: {
        seriesBy: [Md.Revenue, Md.Product.Default],
        slicesBy: [Md.DateDatasets.Date.Month.Long],
        filters: [...filters, newRankingFilter(Md.Revenue, revenueType, 1)],
      },
    },
    [filters, revenueType]
  );

  const showLoading = ['loading', 'pending'].includes(status);
  const { revenue, product, month } = useMemo(() => getRevenue(result), [result]);

  const handleSelectChange = useCallback((e) => setRevenueType(e.target.value), []);

  return (
    <Stack sx={styles.container}>
      <Box sx={styles.revenueWrapper}>
        {showLoading ? (
          <LoadingComponent />
        ) : status === 'success' ? (
          <>
            <Typography variant="h4">{revenue}</Typography>
            <Typography variant="h6">
              {product} in {month}
            </Typography>
          </>
        ) : (
          <Typography variant="h4">N/A</Typography>
        )}
      </Box>
      <Select sx={styles.select} value={revenueType} onChange={handleSelectChange}>
        <MenuItem value="TOP">Maximum</MenuItem>
        <MenuItem value="BOTTOM">Minimum</MenuItem>
      </Select>
    </Stack>
  );
};
