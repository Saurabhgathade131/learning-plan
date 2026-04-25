import type { VercelRequest, VercelResponse } from '@vercel/node';

// In-memory fallback (real data should be in DynamoDB)
let progressData: Record<string, any> = {};

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'GET') {
        return res.json(progressData);
    }

    if (req.method === 'POST') {
        const { id, status, type } = req.body;
        if (!id || !status) {
            return res.status(400).json({ error: 'Missing id or status' });
        }
        progressData[id] = { status, type, timestamp: new Date().toISOString() };
        return res.json(progressData);
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
