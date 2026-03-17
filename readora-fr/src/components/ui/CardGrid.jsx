import { useEffect, useState } from "react";
import Card08 from "./card/card08";
import { fetchLatestBlogs } from "@/util/api";

export default function CardGrid() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBlogs = async () => {
            const data = await fetchLatestBlogs();
            if (data) setItems(data);
            setLoading(false);
        };
        loadBlogs();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    Loading blogs...
                </p>
            </div>
        );
    }

    if (!items || items.length === 0) {
        return (
            <div className="flex items-center justify-center h-64">
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    No items to display.
                </p>
            </div>
        );
    }

    return (
        <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="mb-2 tracking-tighter text-4xl font-bold text-left text-zinc-900 dark:text-zinc-100 sm:text-6xl">
                    Featured Blogs
                </h2>
                <p className="mb-8 text-lg text-left text-zinc-900 dark:text-zinc-100 tracking-tight">
                    Explore the latest blogs on our site.
                </p>
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-10">
                    {items.map((item, index) => (
                        <Card08
                            key={`${item._id}-${index}`}
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                            badge={{ text: "New", variant: "orange" }}
                            href={`/blog/${item._id}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
