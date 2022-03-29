import { renderHook, act } from '@testing-library/react-hooks/dom';

import { useDateFilter } from './useDateFilter';
import { DateFilterOption } from '@gooddata/sdk-ui-filters';

describe('useDateFilter hook', () => {
  it('has correct defaults', () => {
    const { result } = renderHook(() => useDateFilter());

    const { dateFilterDisplayValue, dateFilter } = result.current;

    expect(dateFilterDisplayValue).toBe('all time');
    expect(dateFilter).toBeNull(); // all time filter has no value
  });

  it('handles filter change', () => {
    const { result } = renderHook(() => useDateFilter());

    const { handleFilterApply } = result.current;
    const newFilterValue: DateFilterOption = {
      from: -6,
      to: 0,
      granularity: 'GDC.time.date',
      localIdentifier: 'LAST_7_DAYS',
      type: 'relativePreset',
      visible: true,
      name: '',
    };

    act(() => {
      handleFilterApply(newFilterValue, false);
    });

    const {
      filterState: { selectedFilterOption },
      dateFilterDisplayValue,
      dateFilter,
    } = result.current;

    expect(dateFilterDisplayValue).toBe('last 7 days');
    expect(selectedFilterOption).toEqual(newFilterValue);
    expect(dateFilter).toMatchInlineSnapshot(`
      Object {
        "relativeDateFilter": Object {
          "dataSet": Object {
            "identifier": "date.dataset.dt",
            "type": "dataSet",
          },
          "from": -6,
          "granularity": "GDC.time.date",
          "to": 0,
        },
      }
    `);
  });
});
