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
// 1. CORS MUST BE FIRST
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Amz-Date', 'X-Api-Key', 'X-Amz-Security-Token'],
    credentials: true
}));
app.use(express_1.default.json());
// 2. Health check (No DynamoDB dependency)
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
const client = new client_dynamodb_1.DynamoDBClient({});
const docClient = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
const PROGRESS_TABLE = process.env.PROGRESS_TABLE || 'learning-tracker-api-dev-progress';
const NOTES_TABLE = process.env.NOTES_TABLE || 'learning-tracker-api-dev-notes';
const SKILLS_TABLE = process.env.SKILLS_TABLE || 'learning-tracker-api-dev-skills';
const STANDUPS_TABLE = process.env.STANDUPS_TABLE || 'learning-tracker-api-dev-standups';
const GOALS_TABLE = process.env.GOALS_TABLE || 'learning-tracker-api-dev-goals';
const SCHEDULE_TABLE = process.env.SCHEDULE_TABLE || 'learning-tracker-api-dev-schedule';
// Get all learning plans (for tabs)
// ... (omitting irrelevant lines for brevity in instruction, will replace precisely)
// GET Schedule
app.get('/api/schedule/:userId/:date', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, date } = req.params;
    try {
        const { Items } = yield docClient.send(new lib_dynamodb_1.QueryCommand({
            TableName: SCHEDULE_TABLE,
            KeyConditionExpression: 'userId = :u AND #d = :date',
            ExpressionAttributeValues: { ':u': userId, ':date': date },
            ExpressionAttributeNames: { '#d': 'date' }
        }));
        res.json(Items && Items.length > 0 ? Items[0] : { userId, date, tasks: {} });
    }
    catch (error) {
        console.error("Error fetching schedule:", error);
        res.status(500).json({ error: 'Failed' });
    }
}));
// POST Schedule
app.post('/api/schedule', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, date, tasks } = req.body;
    try {
        yield docClient.send(new lib_dynamodb_1.PutCommand({
            TableName: SCHEDULE_TABLE,
            Item: { userId, date, tasks: tasks || {}, updatedAt: new Date().toISOString() }
        }));
        res.json({ success: true });
    }
    catch (error) {
        console.error("Error saving schedule:", error);
        res.status(500).json({ error: 'Failed' });
    }
}));
// Get all learning plans (for tabs)
app.get('/api/plans', (req, res) => {
    try {
        if (!data_1.allLearningPlans)
            throw new Error("allLearningPlans is undefined");
        res.json(data_1.allLearningPlans);
    }
    catch (error) {
        console.error("CRITICAL: Error in /api/plans:", error);
        res.status(500).json({ error: error.message || 'Internal Server Error', stack: error.stack });
    }
});
// Legacy: Get single plan (backward compatible)
app.get('/api/plan', (req, res) => {
    res.json(data_1.learningPlan);
});
// GET Progress (All or User-specific)
app.get('/api/progress/:userId?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        let Items;
        if (userId) {
            const result = yield docClient.send(new lib_dynamodb_1.ScanCommand({
                TableName: PROGRESS_TABLE,
                FilterExpression: 'userId = :u',
                ExpressionAttributeValues: { ':u': userId }
            }));
            Items = result.Items;
        }
        else {
            const result = yield docClient.send(new lib_dynamodb_1.ScanCommand({ TableName: PROGRESS_TABLE }));
            Items = result.Items;
        }
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
                userId: req.body.userId || 'legacy',
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
// GET Notes (All or User-specific)
app.get('/api/notes/:userId?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        let Items;
        if (userId) {
            const result = yield docClient.send(new lib_dynamodb_1.ScanCommand({
                TableName: NOTES_TABLE,
                FilterExpression: 'userId = :u',
                ExpressionAttributeValues: { ':u': userId }
            }));
            Items = result.Items;
        }
        else {
            const result = yield docClient.send(new lib_dynamodb_1.ScanCommand({ TableName: NOTES_TABLE }));
            Items = result.Items;
        }
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
                userId: req.body.userId || 'legacy',
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
// GET Skills
app.get('/api/skills/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const { Items } = yield docClient.send(new lib_dynamodb_1.QueryCommand({
            TableName: SKILLS_TABLE,
            KeyConditionExpression: 'userId = :u',
            ExpressionAttributeValues: { ':u': userId }
        }));
        res.json(Items || []);
    }
    catch (error) {
        console.error("Error fetching skills:", error);
        res.status(500).json({ error: 'Failed' });
    }
}));
// POST Skill
app.post('/api/skills', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, skillName } = req.body;
    try {
        yield docClient.send(new lib_dynamodb_1.PutCommand({
            TableName: SKILLS_TABLE,
            Item: { userId, skillName, acquiredAt: new Date().toISOString() }
        }));
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed' });
    }
}));
// GET Standups
app.get('/api/standups/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const { Items } = yield docClient.send(new lib_dynamodb_1.QueryCommand({
            TableName: STANDUPS_TABLE,
            KeyConditionExpression: 'userId = :u',
            ExpressionAttributeValues: { ':u': userId }
        }));
        res.json(Items || []);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed' });
    }
}));
// POST Standup
app.post('/api/standups', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, date, accomplished, focusLost, planTomorrow } = req.body;
    try {
        yield docClient.send(new lib_dynamodb_1.PutCommand({
            TableName: STANDUPS_TABLE,
            Item: { userId, date, accomplished, focusLost, planTomorrow, createdAt: new Date().toISOString() }
        }));
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed' });
    }
}));
// GET Goals
app.get('/api/goals/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const { Items } = yield docClient.send(new lib_dynamodb_1.QueryCommand({
            TableName: GOALS_TABLE,
            KeyConditionExpression: 'userId = :u',
            ExpressionAttributeValues: { ':u': userId }
        }));
        res.json(Items || []);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed' });
    }
}));
// POST Goal
app.post('/api/goals', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, goalId, title, deadline, microSteps } = req.body;
    try {
        yield docClient.send(new lib_dynamodb_1.PutCommand({
            TableName: GOALS_TABLE,
            Item: { userId, goalId, title, deadline, microSteps: microSteps || [], createdAt: new Date().toISOString() }
        }));
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed' });
    }
}));
// Global Error Handler
app.use((err, req, res, next) => {
    console.error("UNHANDLED ERROR:", err);
    res.status(500).json({
        error: 'Global Unhandled Error',
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
});
// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
// Export for AWS Lambda
exports.handler = (0, serverless_http_1.default)(app);
