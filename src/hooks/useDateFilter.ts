import { useCallback, useState } from 'react';
import { DateFilterHelpers, DateFilterOption, defaultDateFilterOptions } from '@gooddata/sdk-ui-filters';
import { getDateFilterTitle } from '@gooddata/sdk-ui-filters/dist/DateFilter/utils/Translations/DateFilterTitle';
import { ILocale } from '@gooddata/sdk-ui';
import { DateDatasets } from '../md/full';

type DateFilterState = {
  selectedFilterOption: DateFilterOption;
  excludeCurrentPeriod: boolean;
};

const defaultInitialState = {
  selectedFilterOption: defaultDateFilterOptions.allTime!,
  excludeCurrentPeriod: false,
};

export const useDateFilter = (initialState: DateFilterState = defaultInitialState) => {
  const [filterState, setFilterState] = useState<DateFilterState>(initialState);
  const { selectedFilterOption, excludeCurrentPeriod } = filterState;

  const handleFilterApply = useCallback(
    (selectedFilterOption: DateFilterOption, excludeCurrentPeriod: boolean) => {
      setFilterState({
        selectedFilterOption,
        excludeCurrentPeriod,
      });
    },
    []
  );

  const dateFilterDisplayValue = getDateFilterTitle(
    filterState.selectedFilterOption,
    navigator.language as ILocale
  ).toLowerCase();

  const dateFilter = DateFilterHelpers.mapOptionToAfm(
    selectedFilterOption,
    DateDatasets.Date.ref,
    excludeCurrentPeriod
  );

  return { filterState, handleFilterApply, dateFilterDisplayValue, dateFilter };
};
