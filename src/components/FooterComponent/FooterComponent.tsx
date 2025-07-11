"use client"

import { useMounted } from "@/Hooks/useMounted";
import { useRouter } from "next/navigation";

export const FooterComponent = () => {
    const mounted = useMounted();
    const router = useRouter();

    if (!mounted) {
        return null;
    }

    return (
        <footer className="bg-black w-full h-48 gap-4 flex flex-col justify-center items-center text-white">
            <div className="h-[70%] w-full flex items-center justify-center gap-4">
                <span>© 2025 Temper. All rights reserved.</span>
            </div>
            <div className="h-[30%] w-full flex items-end justify-end gap-4 p-4 cursor-pointer">
                <span onClick={() => router.push("/products")}>Products (preview)</span>
            </div>
        </footer>
    )
}