import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { learningPlan, allLearningPlans } from './data';
import serverless from 'serverless-http';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const PROGRESS_FILE = path.join(__dirname, '../progress.json');
const NOTES_FILE = path.join(__dirname, '../notes.json');

// Helper to read progress
const readProgress = () => {
    if (!fs.existsSync(PROGRESS_FILE)) {
        return {};
    }
    const data = fs.readFileSync(PROGRESS_FILE, 'utf-8');
    return JSON.parse(data);
};

// Helper to write progress
const writeProgress = (data: any) => {
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(data, null, 2));
};

// Helper to read notes
const readNotes = () => {
    if (!fs.existsSync(NOTES_FILE)) {
        return {};
    }
    const data = fs.readFileSync(NOTES_FILE, 'utf-8');
    return JSON.parse(data);
};

// Helper to write notes
const writeNotes = (data: any) => {
    fs.writeFileSync(NOTES_FILE, JSON.stringify(data, null, 2));
};

// Get all learning plans (for tabs)
app.get('/api/plans', (req, res) => {
    res.json(allLearningPlans);
});

// Legacy: Get single plan (backward compatible)
app.get('/api/plan', (req, res) => {
    res.json(learningPlan);
});

app.get('/api/progress', (req, res) => {
    const progress = readProgress();
    res.json(progress);
});

app.post('/api/progress', (req, res) => {
    const { id, status, type } = req.body;
    if (!id || !status) {
        return res.status(400).json({ error: 'Missing id or status' });
    }

    const progress = readProgress();
    progress[id] = { status, type, timestamp: new Date().toISOString() };

    writeProgress(progress);
    res.json(progress);
});

// Get all notes
app.get('/api/notes', (req, res) => {
    const notes = readNotes();
    res.json(notes);
});

// Save note for a specific topic
app.post('/api/notes', (req, res) => {
    const { topicId, note, currentVideo, timestamp: videoTimestamp } = req.body;
    if (!topicId) {
        return res.status(400).json({ error: 'Missing topicId' });
    }

    const notes = readNotes();
    notes[topicId] = {
        note: note || '',
        currentVideo: currentVideo || '',
        videoTimestamp: videoTimestamp || '',
        updatedAt: new Date().toISOString()
    };

    writeNotes(notes);
    res.json(notes);
});

// Delete a note
app.delete('/api/notes/:topicId', (req, res) => {
    const { topicId } = req.params;
    const notes = readNotes();
    delete notes[topicId];
    writeNotes(notes);
    res.json(notes);
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
