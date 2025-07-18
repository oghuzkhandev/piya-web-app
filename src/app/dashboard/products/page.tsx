"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

const categories = [
  "All",
  "Soft Drinks",
  "Juices",
  "Beers",
  "Wines",
  "Water",
  "Energy Drinks",
];

const products: Product[] = [
  {
    id: 1,
    name: "Coca Cola",
    price: "€1.50",
    description: "Classic soft drink with refreshing taste.",
    category: "Soft Drinks",
    image: "/images/cocacola.png",
  },
  {
    id: 2,
    name: "Orange Juice",
    price: "€2.00",
    description: "Freshly squeezed orange juice.",
    category: "Juices",
    image: "/images/tropicana.png",
  },
  {
    id: 3,
    name: "Heineken Beer",
    price: "€2.50",
    description: "Premium lager beer from Netherlands.",
    category: "Beers",
    image: "/images/heineken.png",
  },
  {
    id: 5,
    name: "Mineral Water",
    price: "€1.00",
    description: "Pure mineral water for hydration.",
    category: "Water",
    image: "/images/water.png",
  },
  {
    id: 6,
    name: "Redbull Energy Drink",
    price: "€3.00",
    description: "Energy boost for long days.",
    category: "Energy Drinks",
    image: "/images/redbull.png",
  },
  {
    id: 7,
    name: "Lipton Ice Tea Peach",
    price: "€1.75",
    description: "Refreshing peach flavored iced tea.",
    category: "Soft Drinks",
    image: "/images/lipton.png",
  },
  {
    id: 8,
    name: "Tamek Cherry Juice",
    price: "€2.20",
    description: "Pure orange juice with natural taste.",
    category: "Juices",
    image: "/images/tamek.png",
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section className="p-10 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 flex gap-10">
        <div className="flex gap-10 min-h-screen">
          <aside className="w-64 max-h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-10">
            <h2 className="text-2xl font-bold mb-6">Categories</h2>
            <ul className="flex flex-col space-y-6">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? products.length
                    : products.filter((p) => p.category === cat).length;
                const isSelected = selectedCategory === cat;

                return (
                  <li
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`
                    cursor-pointer 
                    px-5 py-3 
                    rounded-lg 
                    flex justify-between items-center 
                    transition 
                    transform 
                    duration-300
                    shadow-sm
                    ${
                      isSelected
                        ? "bg-green-700 text-white shadow-green-600"
                        : "bg-white text-gray-800 hover:text-green-700 border-2 border-slate-200 dark:border-gray-700"
                    }
                    ${
                      !isSelected
                        ? "hover:scale-105 hover:underline underline-offset-4 decoration-green-500"
                        : ""
                    }
                  `}
                  >
                    <span className="font-semibold">{cat}</span>
                    <span
                      className={`
                      ml-3 inline-block px-3 py-1 text-xs font-semibold rounded-full
                      ${
                        isSelected
                          ? "bg-white text-green-700"
                          : "bg-green-100 text-green-700"
                      }
                      shadow-sm
                    `}
                    >
                      {count}
                    </span>
                  </li>
                );
              })}
            </ul>
          </aside>

          <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-15">
            {filteredProducts.length === 0 ? (
              <p className="col-span-full text-4xl font-bold text-center text-gray-500 dark:text-gray-400">
                No products found in this category.
              </p>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-[400px] border border-slate-300 dark:border-gray-700"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-md mt-3"
                    loading="lazy"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-md text-gray-600 dark:text-gray-300 max-h-16 overflow-hidden">
                      {product.description}
                    </p>
                    <div className="mt-1 font-bold text-green-700 dark:text-green-500 text-xl">
                      {product.price}
                    </div>
                    <button
                      className="mt-auto bg-white dark:bg-gray-700 text-blue-600 border hover:scale-105 hover:shadow-blue-600 border-blue-600 font-semibold rounded-md py-2 shadow-sm transition duration-300 ease-in-out
                      hover:bg-blue-600 hover:text-white hover:shadow-md
                      dark:hover:bg-blue-700 dark:hover:shadow-md"
                      onClick={() =>
                        toast.success(`${product.name} added to cart!`, {
                          icon: "🛒",
                          style: {
                            border: "1px solid #22c55e",
                            padding: "16px",
                            color: "#166534",
                            fontWeight: "600",
                            backgroundColor: "#ecfdf5",
                          },
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
