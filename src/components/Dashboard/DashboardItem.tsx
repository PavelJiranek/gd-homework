import { Paper, Typography } from '@mui/material';
import React from 'react';

type DashboardItemProps = {
  title: string;
  fullHeight?: boolean;
};

const styles = {
  paper: {
    paddingX: 2,
    paddingY: 4,
    minHeight: 350,
  },
  title: { marginBottom: 2 },
};

export const DashboardItem: React.FC<DashboardItemProps> = ({ title, fullHeight = false, children }) => {
  return (
    <Paper sx={[styles.paper, fullHeight && { height: '100%' }]}>
      <Typography variant="h6" align="center" sx={styles.title}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};
