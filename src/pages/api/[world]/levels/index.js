import { NextApiRequest, NextApiResponse } from 'next'
import { getLevelKeys, isWorld } from '../../../../utils'

/**
 * @description /api/[world]/levels
 * @param {NextApiRequest} req request
 * @param {NextApiResponse} res response
 */
export default function LevelsApi (req, res) {

    const { world } = req.query

    if (!isWorld (world)) {

        res.json ({
            'success': false,
            'error': 'world does not exist',
        })

        return

    }

    res.json ({
        'success': true,
        'data': [
            ...getLevelKeys (world),
        ],
    })

}