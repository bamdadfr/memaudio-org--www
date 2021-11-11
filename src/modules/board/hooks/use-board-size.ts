import { useMemo } from 'react';

type UseBoardSize = {
  columns: number;
  rows: number;
}

/**
 * Hook to get the board size
 *
 * @param {number} length - The length of the board children
 * @returns {UseBoardSize} - The board size with columns and rows
 */
export function useBoardSize (length: number): UseBoardSize {
  const { columns, rows } = useMemo (() => {
    if (typeof length === 'undefined') {
      return {
        'columns': 1,
        'rows': 1,
      };
    }

    const columns = Math.round (Math.sqrt (length));
    const rows = Math.ceil (length / columns);

    return {
      columns,
      rows,
    };
  }, [length]);

  return {
    columns,
    rows,
  };
}
