import { createNumberJsFormatter, DataViewFacade } from '@gooddata/sdk-ui';
import { IResultAttributeHeader } from '@gooddata/sdk-backend-spi/esm/workspace/execution/results';

const formatter = createNumberJsFormatter();
const REVENUE_FORMAT = '$#,##0';

export const getRevenue = (queryResult?: DataViewFacade) => {
  if (!queryResult) {
    return {};
  }

  const {
    dataView: { data, headerItems },
  } = queryResult;

  const [rawRevenue] = data.flat();
  const revenue = formatter(rawRevenue, REVENUE_FORMAT);

  const [month, product] = (headerItems.flat(2) as IResultAttributeHeader[]).map(
    ({ attributeHeaderItem }) => attributeHeaderItem?.name
  );

  return { revenue, product, month };
};
