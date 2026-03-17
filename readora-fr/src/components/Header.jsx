import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export default function Header() {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {

        const updateAuthState = () => {

            const token = localStorage.getItem("token");

            if (token) {

                try {

                    const decoded = jwtDecode(token);

                    setIsLoggedIn(true);
                    setUsername(decoded.username || "User");

                } catch {

                    setIsLoggedIn(false);
                    setUsername("");

                }

            } else {

                setIsLoggedIn(false);
                setUsername("");

            }

        };

        updateAuthState();

        window.addEventListener("authChange", updateAuthState);

        return () => {
            window.removeEventListener("authChange", updateAuthState);
        };

    }, []);


    const logout = () => {

        localStorage.removeItem("token");

        window.dispatchEvent(new Event("authChange"));

        navigate("/");

    };


    return (

        <header className="h-[110px] fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-lg">

            <div className="max-w-8xl ml-[50px] px-3 flex items-center justify-between">

                {/* Logo */}
                <Link to="/">
                    <img
                        src="/Readora-Logo.png"
                        alt="Readora logo"
                        className="h-[120px] object-cover drop-shadow-[0_0_7px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_0_10px_rgba(200,0,128,0.5)] transition duration-300"
                    />
                </Link>

                <nav className="flex items-center justify-end gap-6 px-4 py-2 text-gray-700 text-lg font-semibold font-sans">

                    <Link
                        to="/find"
                        className="hover:text-indigo-600 transition duration-150"
                    >
                        Find Books
                    </Link>



                    <Link
                        to="/about"
                        className="hover:text-indigo-600 transition duration-150"
                    >
                        About Us
                    </Link>

                    {!isLoggedIn && (
                        <Link to="/login">
                            <button className="px-3 py-1.5 bg-indigo-600/80 text-white rounded-lg shadow hover:bg-indigo-700 hover:scale-105 transition duration-150">
                                Sign In
                            </button>
                        </Link>
                    )}

                    {isLoggedIn && (

                        <div className="flex items-center gap-4">

                            <Link to="/cart">
                                <button className="px-3 py-1.5 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                                    Cart
                                </button>
                            </Link>

                            <div className="relative">

                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="px-3 py-1.5 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                                >
                                    Hi, {username}
                                </button>

                                {dropdownOpen && (

                                    <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border">

                                        <Link
                                            to="/profile"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            My Profile
                                        </Link>

                                        <Link
                                            to="/orders"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            My Orders
                                        </Link>

                                        <button
                                            onClick={logout}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                                        >
                                            Logout
                                        </button>

                                    </div>

                                )}

                            </div>

                        </div>

                    )}

                </nav>

            </div>

        </header>

    );

}