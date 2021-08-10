import { useMemo } from 'react'

type UseBoardSize = {
    columns: number
    rows: number
}

export function useBoardSize (length: number): UseBoardSize {

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
