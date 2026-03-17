import mongoose from "mongoose";
const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },

        about: {
            type: String,
            required: true
        },

        author: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        stock: {
            type: Number,
            required: true
        },

        isbn: {
            type: String,
            required: true
        },

        coverImage: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Book", bookSchema);