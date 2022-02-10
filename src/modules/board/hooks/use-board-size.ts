import {useMemo} from 'react';

type UseBoardSize = {
  columns: number;
  rows: number;
}

/**
 * Hook to get the board size
 */
export function useBoardSize(length: number): UseBoardSize {
  const {columns, rows} = useMemo(() => {
    // default board size
    const obj = {
      columns: 1,
      rows: 1,
    };

    if (typeof length === 'undefined') {
      return obj;
    }

    obj.columns = Math.round(Math.sqrt(length));
    obj.rows = Math.ceil(length / obj.columns);

    return obj;
  }, [length]);

  return {
    columns,
    rows,
  };
}
