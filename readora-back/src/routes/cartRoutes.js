import express from "express";
import Cart from "../models/Cart.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();


// ➕ ADD TO CART
router.post("/add", authMiddleware, async (req, res) => {
    try {
        const { bookId } = req.body;
        const userId = req.user.id;

        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = new Cart({ user: userId, items: [] });
        }

        const existingItem = cart.items.find(
            item => item.book.toString() === bookId
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.items.push({ book: bookId });
        }

        await cart.save();

        res.json({ message: "Added to cart", cart });

    } catch (err) {
        res.status(500).json({ message: "Error adding to cart" });
    }
});


// 📦 GET CART
router.get("/", authMiddleware, async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id })
            .populate("items.book");

        res.json(cart || { items: [] });

    } catch {
        res.status(500).json({ message: "Error fetching cart" });
    }
});


// 🔄 UPDATE QUANTITY
router.put("/update", authMiddleware, async (req, res) => {
    try {
        const { bookId, quantity } = req.body;

        const cart = await Cart.findOne({ user: req.user.id });

        const item = cart.items.find(
            item => item.book.toString() === bookId
        );

        if (item) item.quantity = quantity;

        await cart.save();

        res.json(cart);

    } catch {
        res.status(500).json({ message: "Error updating cart" });
    }
});


// ❌ REMOVE ITEM
router.delete("/remove/:bookId", authMiddleware, async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id });

        cart.items = cart.items.filter(
            item => item.book.toString() !== req.params.bookId
        );

        await cart.save();

        res.json(cart);

    } catch {
        res.status(500).json({ message: "Error removing item" });
    }
});

export default router;