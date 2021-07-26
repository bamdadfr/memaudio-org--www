import { useMemo } from 'react'

/**
 * @param {number} length grid length
 * @typedef {number} Columns
 * @typedef {number} Rows
 * @returns {{Columns,Rows}} grid size
 */
export function useBoardSize (length) {

    const { columns, rows } = useMemo (() => {

        if (typeof length === 'undefined') {

            return {
                'columns': 1,
                'rows': 1,
            }

        }

        const columns = Math.round (Math.sqrt (length))
        const rows = Math.ceil (length / columns)

        return {
            columns,
            rows,
        }

    }, [length])

    return {
        columns,
        rows,
    }

}
