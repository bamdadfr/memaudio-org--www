import {NextApiRequest, NextApiResponse} from 'next';
import {getLevelKeys} from '../../../../../utils/get-level-keys';
import {isWorld} from '../../../../../utils/is-world';

// noinspection JSUnusedGlobalSymbols
/**
 * API endpoint for getting the first level of a world
 * Path: /api/world/[world]/levels/first
 */
export default function GetFirstLevelEndpoint(req: NextApiRequest, res: NextApiResponse): void {
  const world = req.query.world as string;

  if (!isWorld(world)) {
    res.json({
      success: false,
      error: 'world does not exist',
    });
    return;
  }

  res.json({
    success: true,
    meta: {world},
    data: getLevelKeys(world)[0],
  });
}
