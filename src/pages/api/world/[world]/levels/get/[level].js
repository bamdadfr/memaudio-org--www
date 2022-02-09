import {NextApiRequest, NextApiResponse} from 'next';
import {getCardsForDeck} from '../../../../../../utils/get-cards-for-deck';
import {validateWorldAndLevel} from '../../../../../../utils/validate-world-and-level';

/**
 * API endpoint for getting a level's cards.
 * Path: /api/world/[world]/levels/get/[level]
 *
 * @param {NextApiRequest} req - Request object
 * @param {NextApiResponse} res - Response object
 */
export default function GetLevelCardsEndpoint(req, res) {
  const {world, level} = req.query;
  const isValid = validateWorldAndLevel(world, level);

  if (!isValid) {
    res.json({success: false});
    return;
  }

  res.json({
    success: true,
    meta: {world, level},
    data: [...getCardsForDeck(world, level)],
  });
}
