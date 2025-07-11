"use client"

import { useMounted } from "@/Hooks/useMounted";
import { easeOut, motion } from "motion/react";
import { useRouter } from "next/navigation";

interface PreviewProductComponentProps {
    productId?: string;
    productName?: string;
    price?: number;
    isAvailable?: boolean;
}

export const PreviewProductComponent = ({ productId, productName, price, isAvailable }: PreviewProductComponentProps) => {
    const mounted = useMounted();
    const router = useRouter();
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: easeOut } },
    };
    
    if (!mounted) {
        return null;
    }

    return (
        <motion.div
            className="cursor-pointer h-fit w-52 bg-white dark:bg-other-gray rounded-lg shadow-md flex flex-col justify-between items-center pb-4 hover:shadow-lg "
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                if (productId) {
                    router.push(`/product/${productId}`);
                }
            }}
        >
            <div className="h-48 w-full bg-gray rounded-t-lg flex flex-col items-center justify-center">
                {!isAvailable && (
                    <div className="bg-dark-gray text-white w-full py-1 text-center">Out of Stock</div>
                )}
            </div>
            <div className="flex flex-col text-black dark:text-white  w-full px-4">
                <div className="flex justify-center items-center h-10">
                    <span className="font-bold">{productName}</span>
                </div>
                <div className="flex justify-center items-center h-10">
                    <span>${price?.toFixed(2)}</span>
                </div>
            </div>

        </motion.div>
    )
}