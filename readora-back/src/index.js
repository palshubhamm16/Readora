import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js'
import bookRoutes from './routes/bookRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import addressRoutes from './routes/addressRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/orders", orderRoutes);


connectDB();

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});