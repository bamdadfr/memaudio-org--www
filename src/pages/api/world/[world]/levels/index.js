import { NextApiRequest, NextApiResponse } from 'next'
import { getLevelKeys } from '../../../../../utils/get-level-keys'
import { isWorld } from '../../../../../utils/is-world'

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
        'meta': {
            world,
        },
        'data': [
            ...getLevelKeys (world),
        ],
    })

}