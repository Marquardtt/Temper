"use client"

import { useMounted } from "@/Hooks/useMounted";
import { LogoIcon2 } from "@/components/Icons";

export const FooterComponent = () => {
    const mounted = useMounted();

    if (!mounted) {
        return null;
    }

    return (
        <footer className="bg-black w-full h-48 gap-4 flex justify-center items-center text-white">
            <LogoIcon2 />
            © 2025 Temper. All rights reserved.
        </footer>
    )
}