import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignUp() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await res.json();

            if (data.message) {

                toast.success("Account created successfully");

                setTimeout(() => {
                    navigate("/login");
                }, 1000);

            } else {
                toast.error("Signup failed");
            }

        } catch {
            toast.error("Server error");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">

            <form onSubmit={handleSubmit}>
                <div className="max-w-[500px] w-full flex flex-col bg-white/30 backdrop-blur-sm border p-6 rounded shadow space-y-5">

                    <h2 className="text-2xl font-semibold text-center">
                        Sign Up
                    </h2>

                    <div>
                        <label className="block mb-2 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full"
                            required
                        />
                    </div>

                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded shadow transition-all duration-200">
                        Sign Up
                    </button>

                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-600 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>

                </div>
            </form>

        </div>
    );
}