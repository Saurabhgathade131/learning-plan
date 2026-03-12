import express from 'express';
import cors from 'cors';
import { learningPlan, allLearningPlans } from './data';
import serverless from 'serverless-http';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, ScanCommand, DeleteCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const PROGRESS_TABLE = process.env.PROGRESS_TABLE || 'learning-tracker-api-dev-progress';
const NOTES_TABLE = process.env.NOTES_TABLE || 'learning-tracker-api-dev-notes';
const SKILLS_TABLE = process.env.SKILLS_TABLE || 'learning-tracker-api-dev-skills';
const STANDUPS_TABLE = process.env.STANDUPS_TABLE || 'learning-tracker-api-dev-standups';
const GOALS_TABLE = process.env.GOALS_TABLE || 'learning-tracker-api-dev-goals';

// Get all learning plans (for tabs)
app.get('/api/plans', (req, res) => {
    res.json(allLearningPlans);
});

// Legacy: Get single plan (backward compatible)
app.get('/api/plan', (req, res) => {
    res.json(learningPlan);
});

// GET Progress
app.get('/api/progress', async (req, res) => {
    try {
        const { Items } = await docClient.send(new ScanCommand({ TableName: PROGRESS_TABLE }));
        const progress: Record<string, any> = {};
        if (Items) {
            Items.forEach(item => {
                progress[item.id] = { status: item.status, type: item.type, timestamp: item.timestamp };
            });
        }
        res.json(progress);
    } catch (error) {
        console.error("Error fetching progress:", error);
        res.status(500).json({ error: 'Failed to fetch progress' });
    }
});

// POST Progress
app.post('/api/progress', async (req, res) => {
    const { id, status, type } = req.body;
    if (!id || !status) {
        return res.status(400).json({ error: 'Missing id or status' });
    }

    try {
        await docClient.send(new PutCommand({
            TableName: PROGRESS_TABLE,
            Item: {
                id,
                status,
                type,
                timestamp: new Date().toISOString()
            }
        }));

        // Scan and return all (to maintain frontend compatibility)
        const { Items } = await docClient.send(new ScanCommand({ TableName: PROGRESS_TABLE }));
        const progress: Record<string, any> = {};
        if (Items) {
            Items.forEach(item => {
                progress[item.id] = { status: item.status, type: item.type, timestamp: item.timestamp };
            });
        }
        res.json(progress);
    } catch (error) {
        console.error("Error updating progress:", error);
        res.status(500).json({ error: 'Failed to update progress' });
    }
});

// GET Notes
app.get('/api/notes', async (req, res) => {
    try {
        const { Items } = await docClient.send(new ScanCommand({ TableName: NOTES_TABLE }));
        const notes: Record<string, any> = {};
        if (Items) {
            Items.forEach(item => {
                notes[item.topicId] = {
                    note: item.note,
                    currentVideo: item.currentVideo,
                    videoTimestamp: item.videoTimestamp,
                    updatedAt: item.updatedAt
                };
            });
        }
        res.json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
});

// POST Notes
app.post('/api/notes', async (req, res) => {
    const { topicId, note, currentVideo, timestamp: videoTimestamp } = req.body;
    if (!topicId) {
        return res.status(400).json({ error: 'Missing topicId' });
    }

    try {
        await docClient.send(new PutCommand({
            TableName: NOTES_TABLE,
            Item: {
                topicId,
                note: note || '',
                currentVideo: currentVideo || '',
                videoTimestamp: videoTimestamp || '',
                updatedAt: new Date().toISOString()
            }
        }));

        const { Items } = await docClient.send(new ScanCommand({ TableName: NOTES_TABLE }));
        const notes: Record<string, any> = {};
        if (Items) {
            Items.forEach(item => {
                notes[item.topicId] = {
                    note: item.note,
                    currentVideo: item.currentVideo,
                    videoTimestamp: item.videoTimestamp,
                    updatedAt: item.updatedAt
                };
            });
        }
        res.json(notes);
    } catch (error) {
        console.error("Error saving note:", error);
        res.status(500).json({ error: 'Failed to save note' });
    }
});

// DELETE Note
app.delete('/api/notes/:topicId', async (req, res) => {
    const { topicId } = req.params;

    try {
        await docClient.send(new DeleteCommand({
            TableName: NOTES_TABLE,
            Key: { topicId }
        }));

        const { Items } = await docClient.send(new ScanCommand({ TableName: NOTES_TABLE }));
        const notes: Record<string, any> = {};
        if (Items) {
            Items.forEach(item => {
                notes[item.topicId] = {
                    note: item.note,
                    currentVideo: item.currentVideo,
                    videoTimestamp: item.videoTimestamp,
                    updatedAt: item.updatedAt
                };
            });
        }
        res.json(notes);
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ error: 'Failed to delete note' });
    }
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

// Export for AWS Lambda
export const handler = serverless(app);
export { app };
