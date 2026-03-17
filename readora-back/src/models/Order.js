import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        items: [orderItemSchema],

        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address",
            required: true
        },

        totalAmount: {
            type: Number,
            required: true
        },

        orderStatus: {
            type: String,
            enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
            default: "pending"
        },

        paymentMethod: {
            type: String,
            enum: ["cod", "card", "upi"],
            default: "cod"
        }
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);