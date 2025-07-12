"use client"

import { useMounted } from "@/Hooks/useMounted";

export const FilterComponent = () => {
    const mounted = useMounted();

    if (!mounted) {
        return null;
    }

    return (
        <div className="h-full w-full flex justify-center items-center">
            
        </div>
    )
}