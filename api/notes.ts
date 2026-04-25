import type { VercelRequest, VercelResponse } from '@vercel/node';

// In-memory fallback
let notesData: Record<string, any> = {};

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'GET') {
        return res.json(notesData);
    }

    if (req.method === 'POST') {
        const { topicId, note, currentVideo, timestamp: videoTimestamp } = req.body;
        if (!topicId) {
            return res.status(400).json({ error: 'Missing topicId' });
        }
        notesData[topicId] = {
            note: note || '',
            currentVideo: currentVideo || '',
            videoTimestamp: videoTimestamp || '',
            updatedAt: new Date().toISOString()
        };
        return res.json(notesData);
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
