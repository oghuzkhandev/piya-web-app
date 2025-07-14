"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const favoriteProducts = [
  { id: 1, name: "Organic Orange Juice", price: "12.99€", image: "/images/orange-juice.jpg" },
  { id: 2, name: "Sparkling Water", price: "5.49€", image: "/images/sparkling-water.jpg" },
  { id: 3, name: "Herbal Tea", price: "8.99€", image: "/images/herbal-tea.jpg" },
];

const campaigns = [
  { id: 1, title: "Summer Sale - 20% Off!", desc: "Get refreshing discounts on all juices.", bg: "bg-orange-600" },
  { id: 2, title: "Buy 2 Get 1 Free", desc: "On select sparkling waters.", bg: "bg-cyan-600" },
];

const orders = [
  { id: 1, product: "Organic Orange Juice", status: "Shipped", eta: "Tomorrow" },
  { id: 2, product: "Herbal Tea", status: "Processing", eta: "In 3 days" },
];

export default function UserDashboard() {
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 p-8 sm:p-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-orange-500">Welcome back, User!</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your Active Orders</h2>
        <div className="space-y-4">
          {orders.map(({ id, product, status, eta }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: id * 0.1 }}
              onClick={() => setSelectedOrder(selectedOrder === id ? null : id)}
              className="p-4 bg-zinc-800 rounded-lg shadow-md cursor-pointer hover:shadow-orange-500 transition-shadow"
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{product}</p>
                <p className="text-sm">{status}</p>
              </div>
              <p className="text-sm text-zinc-400">ETA: {eta}</p>
              {selectedOrder === id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-zinc-300 text-sm"
                >
                  Your order is being prepared and will be shipped soon. Thank you for choosing us!
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {favoriteProducts.map(({ id, name, price, image }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 rounded-xl shadow-md overflow-hidden cursor-pointer"
            >
              <img src={image} alt={name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-orange-400 mb-1">{name}</h3>
                <p className="text-zinc-300">{price}</p>
                <button className="mt-3 px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Current Campaigns</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          {campaigns.map(({ id, title, desc, bg }) => (
            <motion.div
              key={id}
              className={`${bg} p-6 rounded-lg shadow-lg flex-1 text-white cursor-pointer`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
