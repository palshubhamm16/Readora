import express from "express";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// PLACE ORDER
router.post("/place", auth, async (req, res) => {

    const { addressId } = req.body;

    const cart = await Cart.findOne({ user: req.user.id })
        .populate("items.book");

    if (!cart || cart.items.length === 0) {
        return res.status(400).json({ message: "Cart empty" });
    }

    const items = cart.items.map(item => ({
        book: item.book._id,
        quantity: item.quantity,
        price: item.book.price
    }));

    const totalAmount = items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
    );

    const order = new Order({
        user: req.user.id,
        items,
        address: addressId,
        totalAmount
    });

    await order.save();

    // clear cart
    cart.items = [];
    await cart.save();

    res.json(order);
});


// GET USER ORDERS
router.get("/", auth, async (req, res) => {
    const orders = await Order.find({ user: req.user.id })
        .populate("items.book")
        .populate("address");

    res.json(orders);
});

export default router;