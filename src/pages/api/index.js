import { NextApiRequest, NextApiResponse } from 'next'

/**
 * @description /api
 * @param {NextApiRequest} _req request
 * @param {NextApiResponse} res response
 */
export default function IndexApi (_req, res) {

    res.json ({ 'success': true })

}