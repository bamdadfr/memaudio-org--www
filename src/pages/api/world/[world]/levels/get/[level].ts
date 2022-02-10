import {NextApiRequest, NextApiResponse} from 'next';
import {getCardsForDeck} from '../../../../../../utils/get-cards-for-deck';
import {
  validateWorldAndLevel,
} from '../../../../../../utils/validate-world-and-level';

/**
 * API endpoint for getting a level's cards.
 * Path: /api/world/[world]/levels/get/[level]
 */
export default function GetLevelCardsEndpoint(req: NextApiRequest, res: NextApiResponse): void {
  const world = req.query.world as string;
  const level = req.query.level as string;

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
