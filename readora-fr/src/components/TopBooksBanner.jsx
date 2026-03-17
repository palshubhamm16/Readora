import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const banners = [
    {
        title: "Atomic Habits",
        about: "Transform your life with small habits",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
        link: "/book/atomic-habits"
    },
    {
        title: "The Alchemist",
        about: "A journey of dreams and destiny",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        link: "/book/the-alchemist"
    },
    {
        title: "Sapiens",
        about: "A brief history of humankind",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
        link: "/book/sapiens"
    }
];

export default function TopBooksBanner() {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[450px] relative overflow-hidden rounded-2xl mx-auto max-w-7xl">

            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {banners.map((banner, i) => (
                    <div
                        key={i}
                        className="w-full h-[450px] flex-shrink-0 relative"
                    >

                        {/* Image */}
                        <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 text-white">

                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                {banner.title}
                            </h2>

                            <p className="text-lg mb-6 max-w-md">
                                {banner.about}
                            </p>

                            <Link
                                to={banner.link}
                                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold"
                            >
                                View Book
                            </Link>

                        </div>

                    </div>
                ))}
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {banners.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>

        </div>
    );
}