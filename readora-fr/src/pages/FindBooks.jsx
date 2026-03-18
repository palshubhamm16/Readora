import { useState } from "react";

import SearchBar from "@/components/SearchBar";
import CardGrid from "@/components/ui/CardGrid";
import TopBooksCarousel from "@/components/TopBooksCarousel";

export default function FindBooks() {

    const [books, setBooks] = useState([]);
    const [searched, setSearched] = useState(false);

    const handleSearchResults = (results) => {
        setBooks(results);
        setSearched(true);
    };

    const cards = books.map((book) => ({
        image: book.coverImage,
        title: book.title,
        subtitle: book.author,
        description: book.about,
        href: `/book/${book._id}`,
    }));

    return (
        <div className="min-h-screen flex flex-col pt-[120px]">

            <div className="mb-6 flex flex-col items-center">
                <h1 className="mb-6 mt-4 text-4xl font-bold">
                    Find Books
                </h1>

                <SearchBar onSearchResults={handleSearchResults} />
            </div>

            <div className="px-4 sm:px-8 lg:px-20 flex justify-center">

                {!searched ? (
                    <p className="text-gray-600 text-lg mt-10">
                        Your search results will show up here.
                    </p>

                ) : books.length === 0 ? (
                    <p className="text-red-500 text-lg mt-10">
                        No results found.
                    </p>

                ) : (
                    <CardGrid
                        items={cards}
                        title="Search Results"
                        subtitle="Books matching your search"
                    />
                )}

            </div>

            <TopBooksCarousel />

        </div>
    );
}