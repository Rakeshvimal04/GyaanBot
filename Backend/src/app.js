import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import { populate } from 'dotenv';
import fileRoutes from "./routes/file.js";

const app = express();

// Core middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'ai-gyaanbot-backend' });
});

app.use('/auth', authRoutes);


app.use("/files", fileRoutes);

export default app;
