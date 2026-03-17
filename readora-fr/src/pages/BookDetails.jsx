import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function BookDetails() {

    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [id]);

    if (!book) return <p className="text-center mt-20">Loading...</p>;

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(book);

        localStorage.setItem("cart", JSON.stringify(cart));

        toast.success("Added to cart");
    };

    return (
        <div className="max-w-7xl mx-auto mt-[140px] p-6 grid md:grid-cols-3 gap-8">

            {/* LEFT - IMAGE */}
            <div className="col-span-1">
                <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-[450px] object-cover rounded-lg shadow"
                />
            </div>

            {/* CENTER - DETAILS */}
            <div className="col-span-1 space-y-4">

                <h1 className="text-3xl font-bold">{book.title}</h1>

                <p className="text-gray-600">
                    by <span className="font-semibold">{book.author}</span>
                </p>

                <p className="text-sm text-gray-500">
                    Category: {book.category}
                </p>

                <p className="text-sm text-gray-500">
                    ISBN: {book.isbn}
                </p>

                <p className="text-lg mt-4">
                    {book.about}
                </p>

                <hr />

                <h2 className="text-xl font-semibold">About this book</h2>

                <p className="text-gray-700 leading-relaxed">
                    {book.description}
                </p>

            </div>

            {/* RIGHT - BUY BOX (Amazon Style) */}
            <div className="col-span-1 border rounded-lg p-6 shadow bg-white space-y-4 h-fit">

                <div className="text-2xl font-bold text-green-600">
                    ₹ {book.price}
                </div>

                <p className="text-sm text-gray-600">
                    Inclusive of all taxes
                </p>

                <p className="text-sm">
                    {book.stock > 0
                        ? "✅ In Stock"
                        : "❌ Out of Stock"}
                </p>

                <button
                    onClick={addToCart}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 py-2 rounded-lg font-semibold"
                >
                    Add to Cart
                </button>

                {/* <button className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-lg font-semibold text-white">
                    Buy Now
                </button> */}

                <div className="text-xs text-gray-500 mt-4">
                    Secure transaction • Fast delivery
                </div>

            </div>

        </div>
    );
}