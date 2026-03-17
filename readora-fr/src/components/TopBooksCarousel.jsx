import { useEffect, useState } from "react";
import Card08 from "@/components/ui/card/card08";

const topBooks = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
    },
    {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765"
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
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
                🔥 Top Picks for You
            </h2>

            {/* Cards */}
            <div className="flex justify-center gap-8 transition-all duration-500">

                {visibleBooks.map((book, i) => (
                    <Card08
                        key={i}
                        title={book.title}
                        subtitle={book.author}
                        image={book.coverImage}
                        badge={{ text: "Top" }}
                        href={`/book/${book.title}`}
                    />
                ))}

            </div>

        </div>
    );
}