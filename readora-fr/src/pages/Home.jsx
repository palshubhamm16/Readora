// src/pages/Home.jsx
import CardGrid from "@/components/ui/CardGrid";
import { Link } from "react-router-dom";
import CategoriesSection from "@/components/CategoriesSection";
import TopBooksCarousel from "@/components/TopBooksCarousel";
import TopBooksBanner from "@/components/TopBooksBanner";


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center pt-[150px] max-w-full">
            {/* <div className="overflow-hidden max-h-[700px] min-w-full">
                <img
                    src="/hello.png"
                    alt="Hello"
                    className="w-full object-cover"
                />
            </div> */}

            <div>
                <TopBooksBanner />
            </div>

            <div>
                <TopBooksCarousel />

            </div>
            <div>
                <CategoriesSection />
            </div>



            <div className="my-5 flex justify-center items-center">
                <section className="text-center w-full max-w-7xl py-12 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">

                    <h2 className="text-4xl font-extrabold flex flex-wrap mx-auto justify-center text-black mb-6">
                        Discover Your Next Great Read with Readora !!!
                    </h2>

                    <p className="text-gray-700 mb-8 px-4 max-w-xl mx-auto">
                        From timeless classics to the latest bestsellers, Readora brings the world of books to your fingertips.
                        Explore new genres, discover hidden gems, and build your personal library one story at a time.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">

                        <Link
                            to="/find"
                            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold text-white"
                        >
                            Browse Books
                        </Link>



                    </div>

                </section>
            </div>


        </div>
    );
}
