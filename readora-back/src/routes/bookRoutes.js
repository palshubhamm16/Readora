import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

// GET books grouped by category (max 5 each)
router.get("/grouped", async (req, res) => {
    try {

        const books = await Book.find();

        const grouped = {};

        books.forEach((book) => {

            if (!grouped[book.category]) {
                grouped[book.category] = [];
            }

            if (grouped[book.category].length < 5) {
                grouped[book.category].push(book);
            }

        });

        res.json(grouped);

    } catch (err) {
        res.status(500).json({ message: "Error fetching books" });
    }
});





router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(book);
    } catch (err) {
        res.status(500).json({ message: "Error fetching book" });
    }
});



export default router;
