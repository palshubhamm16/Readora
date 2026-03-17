import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "../src/models/Book.js";

dotenv.config();

const seedBooks = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        // Clear existing books (optional)
        await Book.deleteMany();

        const books = [
            {
                title: "Harry Potter and the Philosopher's Stone",

                about: "Magical adventure",

                author: "J.K. Rowling",

                description: `Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his horrible aunt and uncle. 

Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry.

An incredible adventure is about to begin! 

Packed with magic, friendship, and bravery, this unforgettable first installment of the Harry Potter series introduces readers to a world where anything is possible and where courage can be found in the most unexpected places.`,

                category: "Fiction",

                price: 499,

                stock: 50,

                isbn: "9780747532699",

                coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773747207/hp1_irasfs.jpg"
            }
        ];

        await Book.insertMany(books);

        console.log("✅ Book seeded successfully");

        process.exit();

    } catch (error) {

        console.error("❌ Error seeding books:", error);
        process.exit(1);

    }
};

seedBooks();