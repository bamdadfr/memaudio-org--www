import { NextApiRequest, NextApiResponse } from 'next'

/**
 * @description /api
 * @param {NextApiRequest} _req request
 * @param {NextApiResponse} res response
 */
export default function IndexApi (_req, res) {

    res.status (200).json ({ 'success': true })

}