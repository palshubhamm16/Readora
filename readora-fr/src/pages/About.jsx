import React from 'react';
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="relative min-h-screen font-sans mt-[120px] text-black overflow-hidden mb-9">

            <div className="relative z-10 space-y-12">

                {/* Hero Section */}
                <section className="py-16 text-center">
                    <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-xl">
                        About Readora
                    </h1>
                    <p className="text-lg mt-4 text-gray-700 px-4 max-w-3xl mx-auto">
                        A place where readers discover new worlds, timeless stories, and knowledge that lasts a lifetime.
                    </p>
                </section>


                {/* Our Story */}
                <section className="md:flex items-center px-6 py-12 gap-10 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">
                    <div className="flex-1 h-60 rounded-lg overflow-hidden">
                        <img
                            src="Readora.png"
                            alt="Books"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Our Story
                        </h2>

                        <p className="text-black leading-relaxed">
                            Readora was created with a simple belief — books have the power to transform lives.
                            What started as a small idea among passionate readers soon grew into a platform
                            designed to make discovering and buying books easier, more enjoyable, and more personal.
                            Today, Readora connects readers with stories from around the world, helping them
                            explore new ideas, perspectives, and adventures with every page.
                        </p>
                    </div>
                </section>



                {/* Our Mission */}
                <section className="md:flex items-center px-6 py-12 gap-10 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">

                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Our Mission
                        </h2>

                        <p className="text-black mb-6 leading-relaxed">
                            Our mission is to make reading accessible, inspiring, and convenient for everyone.
                            At Readora, we aim to create a platform where readers can easily discover books they love,
                            explore new genres, and build their personal libraries. Whether you're searching for
                            bestsellers, timeless classics, or hidden literary gems, Readora helps bring the joy
                            of reading closer to you.
                        </p>
                    </div>

                    <div className="flex-1 h-60 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                            alt="Reading"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </section>



                {/* Our Values */}
                <section className="backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl px-6 py-16 text-center rounded-2xl mx-4">

                    <h2 className="text-3xl font-bold text-black mb-10">
                        Our Values
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">

                        {[
                            {
                                title: 'Passion for Reading',
                                desc: 'We believe books have the power to inspire, educate, and transform lives.'
                            },
                            {
                                title: 'Accessibility',
                                desc: 'Making books easy to discover and purchase for readers everywhere.'
                            },
                            {
                                title: 'Curated Selection',
                                desc: 'Carefully chosen collections of books across genres and interests.'
                            },
                            {
                                title: 'Community',
                                desc: 'Connecting readers who share a love for stories and knowledge.'
                            },
                            {
                                title: 'Trust',
                                desc: 'Providing a reliable platform where readers can shop with confidence.'
                            },
                            {
                                title: 'Growth',
                                desc: 'Encouraging lifelong learning through books and ideas.'
                            }
                        ].map(({ title, desc }) => (

                            <div
                                key={title}
                                className="bg-blue-900/80 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:scale-105 transition-transform"
                            >
                                <h3 className="text-xl font-semibold text-blue-200">
                                    {title}
                                </h3>

                                <p className="text-white mt-2 text-sm">
                                    {desc}
                                </p>
                            </div>

                        ))}

                    </div>

                </section>



                {/* What Makes Us Unique */}
                <section className="px-6 py-16 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">

                    <h2 className="text-3xl font-bold text-center text-black mb-8">
                        What Makes Readora Unique
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">

                        {[
                            {
                                title: 'Wide Selection',
                                desc: 'From timeless classics to modern bestsellers across many genres.'
                            },
                            {
                                title: 'Reader-Focused Platform',
                                desc: 'Designed specifically to make discovering and buying books simple and enjoyable.'
                            },
                            {
                                title: 'Quality Experience',
                                desc: 'A clean, modern interface that makes exploring books effortless.'
                            },
                            {
                                title: 'Trusted Shopping',
                                desc: 'Secure and reliable experience when browsing and purchasing books.'
                            }
                        ].map(({ title, desc }) => (

                            <div
                                key={title}
                                className="bg-blue-900/80 backdrop-blur-md p-5 rounded-lg border border-white/10 shadow hover:shadow-xl"
                            >
                                <h4 className="text-lg font-semibold text-blue-200">
                                    {title}
                                </h4>

                                <p className="text-sm mt-2 text-white">
                                    {desc}
                                </p>
                            </div>

                        ))}

                    </div>

                </section>



                {/* CTA */}
                <section className="text-center py-12 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl rounded-2xl mx-4">

                    <h2 className="text-4xl font-extrabold text-black mb-6">
                        Start Your Reading Journey
                    </h2>

                    <p className="text-gray-700 mb-8 px-4 max-w-xl mx-auto">
                        Whether you're searching for your next favorite novel,
                        exploring new genres, or building a personal library —
                        Readora is here to help you discover stories that stay with you.
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
};

export default AboutPage;