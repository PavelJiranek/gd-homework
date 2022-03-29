import { Paper, Typography } from '@mui/material';
import React from 'react';

type DashboardItemProps = {
  title: string;
};

const styles = {
  paper: {
    paddingX: 2,
    paddingY: 4,
    minHeight: 230,
  },
  title: { marginBottom: 2 },
};

export const DashboardItem: React.FC<DashboardItemProps> = ({ title, children }) => {
  return (
    <Paper sx={styles.paper}>
      <Typography variant="h6" align="center" sx={styles.title}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};
