import express from "express";
import Address from "../models/Address.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET user addresses
router.get("/", auth, async (req, res) => {
    const addresses = await Address.find({ user: req.user.id });
    res.json(addresses);
});

// ADD address
router.post("/add", auth, async (req, res) => {
    const address = new Address({
        ...req.body,
        user: req.user.id
    });

    await address.save();
    res.json(address);
});

export default router;