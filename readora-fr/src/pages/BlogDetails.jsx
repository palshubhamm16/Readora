import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogDetails } from "@/util/api";

export default function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const data = await blogDetails(id);
            setBlog(data);
        };

        fetchBlog();
    }, [id]);

    if (!blog) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="min-h-screen pt-[180px] px-6 max-w-7xl mx-auto space-y-10 py-7">
            {/* Title & Subtitle */}
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
                <h2 className="text-xl text-gray-600">{blog.subtitle}</h2>
                <div className="text-sm text-gray-500">
                    <p><strong>Location:</strong> {blog.state}, {blog.country}</p>
                </div>
            </div>

            {/* Blur Container Starts */}
            <div className="bg-[#aaaaaa]/10 backdrop-blur-sm p-6 rounded-xl space-y-10">

                {/* Description + Image */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="md:w-1/2">
                        <h3 className="text-lg font-semibold mb-2">Description</h3>
                        <p className="text-gray-800">{blog.description}</p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full max-h-[400px] object-cover rounded shadow-md"
                        />
                    </div>
                </div>

                {/* Pros + Cons */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2 bg-green-50 p-4 rounded shadow">
                        <h3 className="text-lg font-semibold text-green-700 mb-2">Pros</h3>
                        <p>{blog.pros}</p>
                    </div>
                    <div className="md:w-1/2 bg-red-50 p-4 rounded shadow">
                        <h3 className="text-lg font-semibold text-red-700 mb-2">Cons</h3>
                        <p>{blog.cons}</p>
                    </div>
                </div>

                {/* Liked + Suggestions */}
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold">What you liked:</h3>
                        <p>{blog.liked}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Suggestions:</h3>
                        <p>{blog.suggestions}</p>
                    </div>
                </div>

            </div>
            {/* Blur Container Ends */}
        </div>
    );
}
