import React from 'react';
import { Box, Paper } from '@mui/material';
import { DateFilter, DateFilterOption, defaultDateFilterOptions } from '@gooddata/sdk-ui-filters';
import { DateFilterGranularity } from '@gooddata/sdk-backend-spi';
import { IDateFilterCallbackProps } from '@gooddata/sdk-ui-filters/esm/DateFilter/DateFilter';

type FilterBarProps = {
  selectedOption: DateFilterOption;
  onApply: IDateFilterCallbackProps['onApply'];
};

const styles = {
  paper: {
    display: 'flex',
    padding: 2,
  },
  wrapper: {
    minWidth: 180,
  },
};

const availableGranularities: DateFilterGranularity[] = ['GDC.time.month'];

export const FilterBar: React.FC<FilterBarProps> = ({ selectedOption, onApply }) => {
  return (
    <Paper sx={styles.paper}>
      <Box sx={styles.wrapper}>
        <DateFilter
          dateFilterMode="active"
          filterOptions={defaultDateFilterOptions}
          availableGranularities={availableGranularities}
          selectedFilterOption={selectedOption}
          onApply={onApply}
        />
      </Box>
    </Paper>
  );
};
