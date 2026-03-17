import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './config/db.js';

import blogRoutes from './routes/blog.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);
app.use("/", authRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});