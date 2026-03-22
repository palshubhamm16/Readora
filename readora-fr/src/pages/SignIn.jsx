import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignIn() {

    const API_BASE_URL = import.meta.env.VITE_API_URL;


    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await fetch(`${API_BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (data.token) {

                localStorage.setItem("token", data.token);

                // notify header that login happened
                window.dispatchEvent(new Event("authChange"));

                toast.success("Logged in successfully");

                navigate("/");

            } else {

                toast.error("Invalid email or password");

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
                        Sign In
                    </h2>

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

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded shadow transition-all duration-200">
                        Sign In
                    </button>

                    <p className="text-center text-sm">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-blue-600 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>

                </div>
            </form>

        </div>

    );
}