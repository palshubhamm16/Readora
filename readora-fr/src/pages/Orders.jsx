import { useEffect, useState } from "react";

export default function Orders() {
    const API_BASE_URL = import.meta.env.VITE_API_URL;

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const fetchOrders = async () => {

            try {
                const token = localStorage.getItem("token");

                const res = await fetch(`${API_BASE_URL}/orders`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const data = await res.json();
                setOrders(data);

            } catch (err) {
                console.error(err);
            }

        };

        fetchOrders();

    }, [API_BASE_URL]);

    return (
        <div className="max-w-5xl mx-auto mt-[120px] p-6">

            <h1 className="text-3xl font-bold mb-6">Your Orders</h1>

            {orders.map(order => (
                <div key={order._id} className="border p-4 mb-6 rounded shadow">

                    {/* ORDER INFO */}
                    <div className="mb-3">
                        <p className="font-semibold">
                            Order ID: {order._id}
                        </p>
                        <p>Status: {order.orderStatus}</p>
                        <p>Total: ₹ {order.totalAmount}</p>
                    </div>

                    {/* ADDRESS */}
                    {order.address && (
                        <div className="bg-gray-50 p-3 rounded mb-4 border">
                            <h3 className="font-semibold mb-1">Delivery Address</h3>

                            <p>{order.address.fullName}</p>
                            <p>{order.address.street}</p>
                            <p>
                                {order.address.city}, {order.address.state} -{" "}
                                {order.address.postalCode}
                            </p>
                            <p>Phone: {order.address.phone}</p>
                        </div>
                    )}

                    {/* ITEMS */}
                    <div className="space-y-2">
                        {order.items.map(item => (
                            <div key={item._id} className="flex gap-3 items-center">

                                <img
                                    src={item.book.coverImage}
                                    className="w-12 h-16 object-cover"
                                />

                                <div>
                                    <p className="font-medium">
                                        {item.book.title}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Qty: {item.quantity} × ₹ {item.price}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            ))}

        </div>
    );
}