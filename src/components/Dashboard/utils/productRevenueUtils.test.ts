import { getRevenue } from './productRevenueUtils';
import { DataViewFacade } from '@gooddata/sdk-ui';

describe('Product revenue utils', () => {
  it('should get revenue info', () => {
    const revenueInfo = getRevenue(mockQueryResult);

    expect(revenueInfo).toEqual({
      month: 'August',
      product: 'Neptide',
      revenue: '$18,978',
    });
  });

  it('should handle empty query result', () => {
    const revenueInfo = getRevenue();

    expect(revenueInfo).toEqual({});
  });
});

const mockQueryResult = {
  dataView: {
    data: [['18977.57']],
    headerItems: [
      [
        [
          {
            attributeHeaderItem: {
              name: 'August',
              uri: '/gdc/md/ks624rcxvt8buab0u9lzrb0mk0qbga9t/obj/199/elements?id=8',
            },
          },
        ],
      ],
      [
        [
          {
            attributeHeaderItem: {
              name: 'Neptide',
              uri: '/gdc/md/ks624rcxvt8buab0u9lzrb0mk0qbga9t/obj/269/elements?id=389',
            },
          },
        ],
        [
          {
            measureHeaderItem: {
              name: 'Revenue',
              order: 0,
            },
          },
        ],
      ],
    ],
  },
} as DataViewFacade;
