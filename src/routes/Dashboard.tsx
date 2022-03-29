import React from 'react';

import Page from '../components/Page';
import { Grid, Paper, Typography } from '@mui/material';
import { DashboardItem } from '../components/Dashboard/DashboardItem';
import { ProductRevenueChart } from '../components/Dashboard/ProductRevenueChart';

const styles = {
  filterBar: {
    padding: 2,
  },
};

const Dashboard: React.FC = () => {
  return (
    <Page>
      <Typography variant="h2" gutterBottom>
        My Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={styles.filterBar}>Filter bar</Paper>
        </Grid>
        <Grid item xs={8}>
          <DashboardItem title="Product revenue by month">
            <ProductRevenueChart />
          </DashboardItem>
        </Grid>
        <Grid item xs={4}>
          <DashboardItem title="Custom component" />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Dashboard;
