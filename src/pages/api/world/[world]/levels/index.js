import { NextApiRequest, NextApiResponse } from 'next';
import { getLevelKeys } from '../../../../../utils/get-level-keys';
import { isWorld } from '../../../../../utils/is-world';

/**
 * API endpoint for getting all levels in a world
 * Path: /api/world/[world]/levels
 *
 * @param {NextApiRequest} req - The request object
 * @param {NextApiResponse} res - The response object
 */
export default function GetLevelsEndpoint (req, res) {
  const { world } = req.query;

  if (!isWorld (world)) {
    res.json ({
      success: false,
      error: 'world does not exist',
    });

    return;
  }

  res.json ({
    success: true,
    meta: { world },
    data: [...getLevelKeys (world)],
  });
}
