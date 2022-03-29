import React from 'react';

import Page from '../components/Page';
import { Grid, Typography } from '@mui/material';
import { DashboardItem } from '../components/Dashboard/DashboardItem';
import { ProductRevenueChart } from '../components/Dashboard/ProductRevenueChart';
import { FilterBar } from '../components/Dashboard/FilterBar';
import { useDateFilter } from '../hooks/useDateFilter';

const Dashboard: React.FC = () => {
  const { filterState, handleFilterApply, dateFilter, dateFilterDisplayValue } = useDateFilter();

  return (
    <Page>
      <Typography variant="h4" gutterBottom>
        My Dashboard - {dateFilterDisplayValue}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FilterBar selectedOption={filterState.selectedFilterOption} onApply={handleFilterApply} />
        </Grid>
        <Grid item xs={12} md={8}>
          <DashboardItem title="Product revenue by month">
            <ProductRevenueChart filters={[dateFilter]} />
          </DashboardItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardItem title="Custom component" />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Dashboard;
