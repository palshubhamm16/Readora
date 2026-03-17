import { useState } from "react";

import SearchBar from "@/components/SearchBar";
import CardGrid from "@/components/ui/CardGrid";
import MultiCard from "@/components/ui/card/card01";
import TopBooksCarousel from "@/components/TopBooksCarousel";


export default function FindBooks() {
    const [blogs, setBlogs] = useState([]);
    const [searched, setSearched] = useState(false); // Track if search was attempted

    const handleSearchResults = (results) => {  // This Function runs when prop value is returned from child component
        setBlogs(results);
        setSearched(true);
    };

    const cards = blogs.map((blog) => ({
        image: blog.image,
        title: blog.title,
        subtitle: blog.subtitle,
        description: blog.description,
        link: `/blog/${blog._id}`,
    }));

    return (
        <div className="min-h-screen flex flex-col pt-[120px]">
            <div className="mb-6 flex flex-col items-center">
                <h1 className="mb-6 mt-4 tracking-tighter text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl">
                    Find Books
                </h1>
                <SearchBar onSearchResults={handleSearchResults} />
            </div>

            <div className="px-4 sm:px-8 lg:px-20 flex justify-center">
                {!searched ? (
                    <p className="text-gray-600 text-lg text-center mt-10 items-center">
                        Your search results will show up here.
                    </p>
                ) : blogs.length === 0 ? (
                    <p className="text-red-500 text-lg text-center mt-10">
                        No results found.
                    </p>
                ) : (
                    <MultiCard cards={cards} />
                )}
            </div>

            <div>
                <TopBooksCarousel />
            </div>
        </div>
    );
}
