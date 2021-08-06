import { NextApiRequest, NextApiResponse } from 'next'
import { getWorldKeys } from '../../utils'

/**
 * @description /api/worlds
 * @param {NextApiRequest} _req request
 * @param {NextApiResponse} res response
 */
export default function WorldsApi (_req, res) {

    res.json ({
        'success': true,
        'data': [
            ...getWorldKeys (),
        ],
    })

}