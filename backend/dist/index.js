"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const data_1 = require("./data");
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
exports.app = app;
const PORT = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PROGRESS_FILE = path_1.default.join(__dirname, '../progress.json');
const NOTES_FILE = path_1.default.join(__dirname, '../notes.json');
// Helper to read progress
const readProgress = () => {
    if (!fs_1.default.existsSync(PROGRESS_FILE)) {
        return {};
    }
    const data = fs_1.default.readFileSync(PROGRESS_FILE, 'utf-8');
    return JSON.parse(data);
};
// Helper to write progress
const writeProgress = (data) => {
    fs_1.default.writeFileSync(PROGRESS_FILE, JSON.stringify(data, null, 2));
};
// Helper to read notes
const readNotes = () => {
    if (!fs_1.default.existsSync(NOTES_FILE)) {
        return {};
    }
    const data = fs_1.default.readFileSync(NOTES_FILE, 'utf-8');
    return JSON.parse(data);
};
// Helper to write notes
const writeNotes = (data) => {
    fs_1.default.writeFileSync(NOTES_FILE, JSON.stringify(data, null, 2));
};
// Get all learning plans (for tabs)
app.get('/api/plans', (req, res) => {
    res.json(data_1.allLearningPlans);
});
// Legacy: Get single plan (backward compatible)
app.get('/api/plan', (req, res) => {
    res.json(data_1.learningPlan);
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
exports.handler = (0, serverless_http_1.default)(app);
