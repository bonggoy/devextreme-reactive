import { TABLE_DATA_TYPE } from '../table-view/constants';
import { TABLE_REORDERING_TYPE } from './constants';

export const orderedColumns = (tableColumns, order) => {
  const result = Array.from(tableColumns);

  result.sort((a, b) => {
    if (a.type !== TABLE_DATA_TYPE || b.type !== TABLE_DATA_TYPE) return 0;

    const aPos = order.indexOf(a.column.name);
    const bPos = order.indexOf(b.column.name);
    return aPos - bPos;
  });

  return result;
};

export const tableHeaderRowsWithReordering = tableHeaderRows => [
  {
    key: TABLE_REORDERING_TYPE,
    type: TABLE_REORDERING_TYPE,
    height: 0,
  },
  ...tableHeaderRows,
];

export const draftOrder = (order, sourceColumnIndex, targetColumnIndex) => {
  if (sourceColumnIndex === -1
    || targetColumnIndex === -1
    || sourceColumnIndex === targetColumnIndex) {
    return order;
  }

  const result = order.slice();
  const sourceColumn = order[sourceColumnIndex];
  result.splice(sourceColumnIndex, 1);
  result.splice(targetColumnIndex, 0, sourceColumn);

  return result;
};
