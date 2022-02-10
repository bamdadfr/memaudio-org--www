import {NextApiRequest, NextApiResponse} from 'next';
import {getWorldKeys} from '../../utils/get-world-keys';

/**
 * API endpoint for getting all world keys
 * Path: /api/worlds
 */
export default function WorldsApi(_req: NextApiRequest, res: NextApiResponse): void {
  res.json({
    success: true,
    data: [...getWorldKeys()],
  });
}
