import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allLearningPlans } from '../backend/src/data';

// In-memory storage for Vercel (use a database like Vercel KV or Upstash Redis for production)
let progressData: Record<string, any> = {};
let notesData: Record<string, any> = {};

export default function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { path } = req.query;
    const pathStr = Array.isArray(path) ? path.join('/') : path || '';

    // Route handling
    if (req.method === 'GET') {
        if (pathStr === 'plans') {
            return res.json(allLearningPlans);
        }
        if (pathStr === 'progress') {
            return res.json(progressData);
        }
        if (pathStr === 'notes') {
            return res.json(notesData);
        }
    }

    if (req.method === 'POST') {
        if (pathStr === 'progress') {
            const { id, status, type } = req.body;
            if (!id || !status) {
                return res.status(400).json({ error: 'Missing id or status' });
            }
            progressData[id] = { status, type, timestamp: new Date().toISOString() };
            return res.json(progressData);
        }
        if (pathStr === 'notes') {
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
    }

    return res.status(404).json({ error: 'Not found' });
}
