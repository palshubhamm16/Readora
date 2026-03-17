import React, { useState } from "react";

export default function SearchBar({ onSearch }) {

    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("");

    const categories = [
        "Fiction",
        "Self Help",
        "Science",
        "Business",
        "Technology",
        "History"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        onSearch({
            query,
            category
        });
    };

    const clearCategory = () => {
        setCategory("");
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
                <div className="flex gap-3 mt-6">

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

                </div>

            </div>
        </form>
    );
}