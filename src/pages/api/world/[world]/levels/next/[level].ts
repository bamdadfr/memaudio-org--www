import {NextApiRequest, NextApiResponse} from 'next';
import {getNextLevelKey} from '../../../../../../utils/get-next-level-key';
import {isLevel} from '../../../../../../utils/is-level';
import {isWorld} from '../../../../../../utils/is-world';

/**
 * API endpoint for getting the next level in a world
 * Path: /api/world/[world]/levels/next/[level]
 */
export default function GetNextLevelEndpoint(req: NextApiRequest, res: NextApiResponse): void {
  const world = req.query.world as string;
  const level = req.query.level as string;

  // fail if current world is undefined
  if (!isWorld(world)) {
    res.json({
      success: false,
      error: 'world is undefined',
    });
    return;
  }

  // fail if current level is undefined
  if (!isLevel(world, level)) {
    res.json({
      success: false,
      error: 'level is undefined',
    });
    return;
  }

  // fail if next level is undefined
  if (!getNextLevelKey(world, level)) {
    res.json({
      success: false,
      error: 'next level is undefined',
    });
    return;
  }

  // return next level key
  res.json({
    success: true,
    meta: {world, level},
    data: [getNextLevelKey(world, level)],
  });
}
