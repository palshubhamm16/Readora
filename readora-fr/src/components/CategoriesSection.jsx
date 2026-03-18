import { useEffect, useState } from "react";
import Card08 from "@/components/ui/card/card08";

export default function CategoriesSection() {

    const API_BASE_URL = import.meta.env.VITE_API_URL;


    const [categories, setCategories] = useState({});

    useEffect(() => {

        fetch(`${API_BASE_URL}/books/grouped`)
            .then(res => res.json())
            .then(data => setCategories(data));

    }, []);

    return (
        <div className="space-y-11 px-6">

            {Object.keys(categories).map((category) => (

                <div key={category}>

                    {/* Category Title */}
                    <h2 className="text-4xl font-bold mb-6 ml-4 text-black">
                        {category}
                    </h2>

                    {/* Books Row */}
                    <div className="flex gap-9 flex-wrap justify-center overflow-x-auto pb-1">

                        {categories[category].map((book) => (

                            <Card08
                                key={book._id}
                                title={book.title}
                                subtitle={book.author}
                                image={book.coverImage}
                                badge={{ text: category }}
                                href={`/book/${book._id}`}
                            />

                        ))}

                    </div>

                </div>

            ))}

        </div>
    );
}