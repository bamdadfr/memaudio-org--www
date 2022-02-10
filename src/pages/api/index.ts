import {NextApiRequest, NextApiResponse} from 'next';

/**
 * Entry API endpoint
 * Path: /api
 */
export default function IndexApi(_req: NextApiRequest, res: NextApiResponse): void {
  res.json({success: true});
}
