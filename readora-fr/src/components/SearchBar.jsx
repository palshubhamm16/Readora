import React, { useState } from "react";

export default function SearchBar({ onSearchResults }) {

    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    const categories = [
        "Fiction",
        "Self Help",
        "Science",
        "Business",
        "Technology",
        "History"
    ];

    const API_BASE_URL = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const params = new URLSearchParams();

            if (query) params.append("query", query);
            if (category) params.append("category", category);

            const res = await fetch(
                `${API_BASE_URL}/books/search?${params.toString()}`
            );

            const data = await res.json();

            onSearchResults(data);
            setHasSearched(true);

        } catch {
            console.error("Search failed");
        }
    };

    const clearCategory = () => {
        setCategory("");
    };

    const clearSearch = () => {
        setQuery("");
        setCategory("");
        setHasSearched(false);
        onSearchResults([]); // clear results
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="max-w-[800px] flex flex-wrap items-end bg-white/30 backdrop-blur-sm border p-4 rounded shadow gap-6">

                {/* Search Input */}
                <div className="flex-1 min-w-[200px]">
                    <label className="block mb-2 font-medium">
                        Search Books / Author
                    </label>
                    <input
                        type="text"
                        placeholder="Enter book title or author..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>

                {/* Category Dropdown */}
                <div className="min-w-[200px]">
                    <label className="block mb-2 font-medium">
                        Category
                    </label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                    >
                        <option value="">-- All Categories --</option>

                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6 flex-wrap">

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded shadow transition"
                    >
                        Search
                    </button>

                    {category && (
                        <button
                            type="button"
                            onClick={clearCategory}
                            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded shadow transition"
                        >
                            Clear Category
                        </button>
                    )}

                    {hasSearched && (
                        <button
                            type="button"
                            onClick={clearSearch}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
                        >
                            Clear Search
                        </button>
                    )}

                </div>

            </div>
        </form>
    );
}