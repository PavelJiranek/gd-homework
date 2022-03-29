import { useCallback, useState } from 'react';
import { DateFilterOption, defaultDateFilterOptions } from '@gooddata/sdk-ui-filters';
import { getDateFilterTitle } from '@gooddata/sdk-ui-filters/dist/DateFilter/utils/Translations/DateFilterTitle';
import { ILocale } from '@gooddata/sdk-ui';

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

  return { filterState, handleFilterApply, dateFilterDisplayValue };
};
