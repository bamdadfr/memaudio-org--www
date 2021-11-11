import { NextApiRequest, NextApiResponse } from 'next';
import { getNextLevelKey } from '../../../../../../utils/get-next-level-key';
import { isLevel } from '../../../../../../utils/is-level';
import { isWorld } from '../../../../../../utils/is-world';

/**
 * API endpoint for getting the next level in a world
 * Path: /api/world/[world]/levels/next/[level]
 *
 * @param {NextApiRequest} req - The request object
 * @param {NextApiResponse} res - The response object
 */
export default function GetNextLevelEndpoint (req, res) {
  const { world, level } = req.query;

  // fail if current world is undefined
  if (!isWorld (world)) {
    res.json ({
      success: false,
      error: 'world is undefined',
    });
    return;
  }

  // fail if current level is undefined
  if (!isLevel (world, level)) {
    res.json ({
      success: false,
      error: 'level is undefined',
    });
    return;
  }

  // fail if next level is undefined
  if (!getNextLevelKey (world, level)) {
    res.json ({
      success: false,
      error: 'next level is undefined',
    });
    return;
  }

  // return next level key
  res.json ({
    success: true,
    meta: { world, level },
    data: [getNextLevelKey (world, level)],
  });
}
