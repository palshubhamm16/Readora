import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Cart() {

    const API_BASE_URL = import.meta.env.VITE_API_URL;

    const [cart, setCart] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        postalCode: ""
    });

    const token = localStorage.getItem("token");

    // ================= FETCH CART =================
    const fetchCart = async () => {
        const res = await fetch(`${API_BASE_URL}/cart`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();
        setCart(data.items || []);
    };

    // ================= FETCH ADDRESSES =================
    const fetchAddresses = async () => {
        const res = await fetch(`${API_BASE_URL}/address`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();
        setAddresses(data);
    };

    useEffect(() => {
        fetchCart();
        fetchAddresses();
    }, []);

    // ================= UPDATE QUANTITY =================
    const updateQty = async (bookId, quantity) => {

        if (quantity < 1) return;

        await fetch(`${API_BASE_URL}/cart/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ bookId, quantity })
        });

        fetchCart();
    };

    // ================= REMOVE ITEM =================
    const removeItem = async (bookId) => {

        await fetch(`${API_BASE_URL}/cart/remove/${bookId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        });

        toast.success("Removed item");
        fetchCart();
    };

    // ================= ADD ADDRESS =================
    const addAddress = async () => {

        await fetch(`${API_BASE_URL}/address/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(form)
        });

        toast.success("Address added");
        setShowModal(false);
        fetchAddresses();
    };

    // ================= PLACE ORDER =================
    const placeOrder = async () => {

        if (!selectedAddress) {
            toast.error("Please select an address");
            return;
        }

        const res = await fetch(`${API_BASE_URL}/orders/place`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ addressId: selectedAddress })
        });

        if (res.ok) {
            toast.success("Order placed successfully");
            fetchCart();
        } else {
            toast.error("Order failed");
        }
    };

    const total = cart.reduce(
        (sum, item) => sum + item.book.price * item.quantity,
        0
    );

    return (
        <div className="max-w-5xl mx-auto mt-[120px] p-6">

            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

            {/* CART ITEMS */}
            {cart.length === 0 && (
                <p className="text-gray-500">Your cart is empty</p>
            )}

            {cart.map((item) => (
                <div key={item.book._id} className="flex gap-4 mb-4 border p-4 rounded">

                    <img
                        src={item.book.coverImage}
                        className="w-20 h-24 object-cover"
                    />

                    <div className="flex-1">
                        <h2 className="font-semibold">{item.book.title}</h2>
                        <p>₹ {item.book.price}</p>

                        <div className="flex gap-2 mt-2 items-center">
                            <button
                                onClick={() => updateQty(item.book._id, item.quantity - 1)}
                                className="px-2 bg-gray-200"
                            >-</button>

                            <span>{item.quantity}</span>

                            <button
                                onClick={() => updateQty(item.book._id, item.quantity + 1)}
                                className="px-2 bg-gray-200"
                            >+</button>
                        </div>
                    </div>

                    <button
                        onClick={() => removeItem(item.book._id)}
                        className="text-red-500"
                    >
                        Remove
                    </button>
                </div>
            ))}

            {/* TOTAL */}
            <h2 className="text-xl font-bold mt-6">
                Total: ₹ {total}
            </h2>

            {/* ADDRESS SECTION */}
            <div className="mt-10">
                <h2 className="text-xl font-bold mb-4">
                    Select Delivery Address
                </h2>

                {addresses.map(addr => (
                    <div
                        key={addr._id}
                        onClick={() => setSelectedAddress(addr._id)}
                        className={`border p-4 mb-3 rounded cursor-pointer ${selectedAddress === addr._id
                            ? "border-blue-500 bg-blue-50"
                            : ""
                            }`}
                    >
                        <p className="font-semibold">{addr.fullName}</p>
                        <p>{addr.street}, {addr.city}</p>
                        <p>{addr.state} - {addr.postalCode}</p>
                        <p>{addr.phone}</p>
                    </div>
                ))}

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-gray-200 px-4 py-2 rounded"
                >
                    + Add Address
                </button>
            </div>

            {/* PLACE ORDER */}
            <button
                onClick={placeOrder}
                className="mt-6 bg-green-600 text-white px-6 py-3 rounded w-full"
            >
                Place Order
            </button>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

                    <div className="bg-white p-6 rounded w-[400px] space-y-3">

                        <h2 className="text-xl font-bold">Add Address</h2>

                        {["fullName", "phone", "street", "city", "state", "postalCode"].map(field => (
                            <input
                                key={field}
                                placeholder={field}
                                className="w-full border p-2 rounded"
                                onChange={e => setForm({ ...form, [field]: e.target.value })}
                            />
                        ))}

                        <button
                            onClick={addAddress}
                            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                        >
                            Save Address
                        </button>

                        <button
                            onClick={() => setShowModal(false)}
                            className="text-red-500 w-full"
                        >
                            Cancel
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
}