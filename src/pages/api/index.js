import {NextApiRequest, NextApiResponse} from 'next';

/**
 * Entry API endpoint
 * Path: /api
 *
 * @param {NextApiRequest} _req - Request object
 * @param {NextApiResponse} res - Response object
 */
export default function IndexApi(_req, res) {
  res.json({success: true});
}
