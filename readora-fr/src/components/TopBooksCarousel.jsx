import { useEffect, useState } from "react";
import Card08 from "@/components/ui/card/card08";

const topBooks = [
    {
        _id: "507f1f77bcf86cd799439011",
        title: "Atomic Habits",
        author: "James Clear",
        coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773438/817HaeblezL._AC_UF1000_1000_QL80_.jpg_qhet29.jpg"
    },
    {
        _id: "507f1f77bcf86cd799439012",
        title: "The Alchemist",
        author: "Paulo Coelho",
        coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773770818/617lxveUjYL.jpg_obir4b.jpg"
    },
    {
        _id: "507f1f77bcf86cd799439013",
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773439/91lHXEv3LfL._UF1000_1000_QL80_.jpg_t3kejr.jpg"
    },
    {
        _id: "507f1f77bcf86cd799439014",
        title: "Sapiens",
        author: "Yuval Noah Harari",
        coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773445/9780099590088-2.jpg_f687za.jpg"
    },
    {
        _id: "507f1f77bcf86cd799439015",
        title: "Clean Code",
        author: "Robert C. Martin",
        coverImage: "https://res.cloudinary.com/dmul3ttae/image/upload/v1773773438/71T7aD3EOTL._UF1000_1000_QL80_.jpg_rtd48h.jpg"
    }
];

export default function TopBooksCarousel() {

    const [index, setIndex] = useState(0);

    // Auto scroll
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % topBooks.length);
        }, 3000); // change every 3s

        return () => clearInterval(interval);
    }, []);

    // Get 3 books at a time
    const visibleBooks = [
        topBooks[index],
        topBooks[(index + 1) % topBooks.length],
        topBooks[(index + 2) % topBooks.length],
    ];

    return (
        <div className="w-full px-6 py-10">

            {/* Title */}
            <h2 className="text-3xl font-bold mb-6 text-black text-center">
                🔥 Our Top Picks 🔥
            </h2>

            {/* Cards */}
            <div className="flex justify-center gap-10 transition-all duration-500">

                {visibleBooks.map((book) => (
                    <Card08
                        key={book._id}
                        title={book.title}
                        subtitle={book.author}
                        image={book.coverImage}
                        badge={{ text: "Top" }}
                        href={`/book/${book._id}`}
                    />
                ))}

            </div>

        </div>
    );
}