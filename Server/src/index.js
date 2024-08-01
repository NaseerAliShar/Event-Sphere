import cors from 'cors';
import express from 'express';
import connectDB from './db/index.js';
import 'dotenv/config';

import authRoutes from './routes/auth.js';
import eventRoutes from './routes/event.js';

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("App is Working");
});

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

connectDB().catch(console.error);