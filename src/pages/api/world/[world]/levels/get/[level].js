import { NextApiRequest, NextApiResponse } from 'next'
import { getCardsForDeck } from '../../../../../../utils/get-cards-for-deck'
import { validateWorlds } from '../../../../../../utils/validate-worlds'

/**
 * @description /api/[world]/levels/get/[level]
 * @param {NextApiRequest} req request
 * @param {NextApiResponse} res response
 */
export default function LevelsNextApi (req, res) {

    const { world, level } = req.query
    const isValid = validateWorlds (world, level)

    if (!isValid) {

        res.json ({ 'success': false })

        return
    
    }

    res.json ({
        'success': true,
        'meta': {
            world,
            level,
        },
        'data': [
            ...getCardsForDeck (world, level),
        ],
    })

}