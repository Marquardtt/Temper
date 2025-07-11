"use client"

import { motion } from "framer-motion";
import React from "react";
import { useParams } from "next/navigation";

export default function ProductPage() {
    const params = useParams();

    const products = [
        { productId: "1", productName: "Product 1", price: 99.99, isAvailable: false },
        { productId: "2", productName: "Product 2", price: 89.99, isAvailable: false },
        { productId: "3", productName: "Product 3", price: 79.99, isAvailable: true },
        { productId: "4", productName: "Product 4", price: 59.99, isAvailable: false },
        { productId: "5", productName: "Product 5", price: 49.99, isAvailable: true },
    ]

    const productId = params.productId as string;
    const product = products.find(p => p.productId === productId);

    if (!productId) {
        return (
            <main className="h-full flex items-center justify-center">
                <h1 className="text-red-500">Product not found</h1>
            </main>
        )
    }
    return (
        <main className="h-full">
            <section className="h-full bg-white dark:bg-custom-purple flex justify-center items-center font-bold duration-300 transition-all">
                <div className="flex w-full h-full">
                    <div className="h-full w-[65%]  flex flex-col items-center justify-center">
                        <p>Product Images</p>
                    </div>
                    <div className="h-full w-[35%] bg-dark-gray flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center h-[50%] p-4">
                            <h1 className="text-white text-2xl font-bold mb-4">{product!.productName}</h1>
                            <p className="text-white mb-2">${product!.price}</p>
                            {
                                product!.isAvailable ? (
                                    <motion.button
                                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => alert(`Added ${product!.productName} to cart!`)}
                                    >
                                        Add to Cart
                                    </motion.button>
                                ) : (
                                    <button disabled className="bg-gray text-black px-4 py-2 rounded cursor-not-allowed opacity-50">
                                        Out of Stock
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
