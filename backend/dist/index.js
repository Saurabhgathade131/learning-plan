"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const serverless_http_1 = __importDefault(require("serverless-http"));
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const app = (0, express_1.default)();
exports.app = app;
const PORT = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const client = new client_dynamodb_1.DynamoDBClient({});
const docClient = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
const PROGRESS_TABLE = process.env.PROGRESS_TABLE || 'learning-tracker-api-dev-progress';
const NOTES_TABLE = process.env.NOTES_TABLE || 'learning-tracker-api-dev-notes';
// Get all learning plans (for tabs)
app.get('/api/plans', (req, res) => {
    res.json(data_1.allLearningPlans);
});
// Legacy: Get single plan (backward compatible)
app.get('/api/plan', (req, res) => {
    res.json(data_1.learningPlan);
});
// GET Progress
app.get('/api/progress', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Items } = yield docClient.send(new lib_dynamodb_1.ScanCommand({ TableName: PROGRESS_TABLE }));
        const progress = {};
        if (Items) {
            Items.forEach(item => {
                progress[item.id] = { status: item.status, type: item.type, timestamp: item.timestamp };
            });
        }
        res.json(progress);
    }
    catch (error) {
        console.error("Error fetching progress:", error);
        res.status(500).json({ error: 'Failed to fetch progress' });
    }
}));
// POST Progress
app.post('/api/progress', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, status, type } = req.body;
    if (!id || !status) {
        return res.status(400).json({ error: 'Missing id or status' });
    }
    try {
        yield docClient.send(new lib_dynamodb_1.PutCommand({
            TableName: PROGRESS_TABLE,
            Item: {
                id,
                status,
                type,
                timestamp: new Date().toISOString()
            }
        }));
        // Scan and return all (to maintain frontend compatibility)
        const { Items } = yield docClient.send(new lib_dynamodb_1.ScanCommand({ TableName: PROGRESS_TABLE }));
        const progress = {};
        if (Items) {
            Items.forEach(item => {
                progress[item.id] = { status: item.status, type: item.type, timestamp: item.timestamp };
            });
        }
        res.json(progress);
    }
    catch (error) {
        console.error("Error updating progress:", error);
        res.status(500).json({ error: 'Failed to update progress' });
    }
}));
// GET Notes
app.get('/api/notes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Items } = yield docClient.send(new lib_dynamodb_1.ScanCommand({ TableName: NOTES_TABLE }));
        const notes = {};
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
    }
    catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
}));
// POST Notes
app.post('/api/notes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { topicId, note, currentVideo, timestamp: videoTimestamp } = req.body;
    if (!topicId) {
        return res.status(400).json({ error: 'Missing topicId' });
    }
    try {
        yield docClient.send(new lib_dynamodb_1.PutCommand({
            TableName: NOTES_TABLE,
            Item: {
                topicId,
                note: note || '',
                currentVideo: currentVideo || '',
                videoTimestamp: videoTimestamp || '',
                updatedAt: new Date().toISOString()
            }
        }));
        const { Items } = yield docClient.send(new lib_dynamodb_1.ScanCommand({ TableName: NOTES_TABLE }));
        const notes = {};
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
    }
    catch (error) {
        console.error("Error saving note:", error);
        res.status(500).json({ error: 'Failed to save note' });
    }
}));
// DELETE Note
app.delete('/api/notes/:topicId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { topicId } = req.params;
    try {
        yield docClient.send(new lib_dynamodb_1.DeleteCommand({
            TableName: NOTES_TABLE,
            Key: { topicId }
        }));
        const { Items } = yield docClient.send(new lib_dynamodb_1.ScanCommand({ TableName: NOTES_TABLE }));
        const notes = {};
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
    }
    catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ error: 'Failed to delete note' });
    }
}));
// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
// Export for AWS Lambda
exports.handler = (0, serverless_http_1.default)(app);
