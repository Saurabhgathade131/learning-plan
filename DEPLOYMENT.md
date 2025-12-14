# 🚀 AWS Lambda Deployment Guide

## Prerequisites

1. **AWS CLI** installed and configured with your credentials
   ```bash
   aws configure
   # Enter your AWS Access Key ID, Secret Access Key, and region (ap-south-1)
   ```

2. **Node.js 18+** installed

3. **Serverless Framework** (will be installed as dev dependency)

---

## Backend Deployment (AWS Lambda + API Gateway)

### Step 1: Install Dependencies
```bash
cd tracker/backend
npm install
```

### Step 2: Build the TypeScript
```bash
npm run build
```

### Step 3: Deploy to AWS Lambda
```bash
npx serverless deploy
```

After deployment, you'll get an API endpoint like:
```
https://xxxxxx.execute-api.ap-south-1.amazonaws.com/dev/api
```

### Step 4: Update Frontend API URL
In `tracker/frontend/src/App.tsx`, update the API_URL:
```typescript
const API_URL = 'https://your-api-gateway-url.amazonaws.com/dev/api';
```

---

## Frontend Deployment Options

### Option A: Vercel (Recommended - Free & Easy)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Set the root directory to `tracker/frontend`
4. Deploy!

### Option B: AWS S3 + CloudFront

1. Build the frontend:
   ```bash
   cd tracker/frontend
   npm run build
   ```

2. Create an S3 bucket and enable static website hosting

3. Upload the `dist` folder contents to S3

4. Create a CloudFront distribution pointing to S3

---

## Environment Variables

For production, set these in AWS Lambda:
- `NODE_ENV=production`

---

## ⚠️ Important: Data Persistence

Currently, the app uses local JSON files for storage. For AWS Lambda:

### Option 1: Use DynamoDB (Recommended)
Replace file-based storage with DynamoDB for:
- `progress` table
- `notes` table

### Option 2: Use S3
Store JSON files in S3 bucket instead of local files.

---

## Quick Deploy Commands

```bash
# Backend
cd tracker/backend
npm install
npm run deploy

# Frontend (after updating API_URL)
cd tracker/frontend
npm run build
# Then deploy dist/ to Vercel, Netlify, or S3
```

---

## Costs (Approximate)

- **Lambda**: Free tier includes 1M requests/month
- **API Gateway**: Free tier includes 1M calls/month
- **DynamoDB**: Free tier includes 25GB storage
- **S3 + CloudFront**: ~$1-2/month for low traffic

Total: **Essentially free** for personal use!
