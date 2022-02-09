import {NextApiRequest, NextApiResponse} from 'next';
import {getWorldKeys} from '../../utils/get-world-keys';

/**
 * API endpoint for getting all world keys
 * Path: /api/worlds
 *
 * @param {NextApiRequest} _req - The request object
 * @param {NextApiResponse} res - The response object
 */
export default function WorldsApi(_req, res) {
  res.json({
    success: true,
    data: [...getWorldKeys()],
  });
}
