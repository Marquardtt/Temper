"use client"

import { PreviewProductComponent } from "@/components/PreviewProductComponent";
import { useMounted } from "@/Hooks/useMounted";
import { motion } from "motion/react";

export default function ProductsPage() {

    const products = [
        { productId: "1", productName: "Product 1", price: 99.99, isAvailable: false },
        { productId: "2", productName: "Product 2", price: 89.99, isAvailable: false },
        { productId: "3", productName: "Product 3", price: 79.99, isAvailable: true },
        { productId: "4", productName: "Product 4", price: 59.99, isAvailable: false },
        { productId: "5", productName: "Product 5", price: 49.99, isAvailable: true },
    ]

    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } },
    };

    const mounted = useMounted();

    if (!mounted) {
        return null;
    }

    return (
        <main className="h-full">
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="h-full bg-white dark:bg-custom-purple flex justify-center items-center font-bold duration-300 transition-all gap-10">
                {products.map((product, index) => (
                    <PreviewProductComponent key={index} price={product.price} productName={product.productName} isAvailable={product.isAvailable} productId={product.productId} />
                ))}
            </motion.section>
        </main>
    );
}
