"use client"

import { useTheme } from "next-themes";
import Image from "next/image"
import { useRouter } from "next/navigation"
import 'primeicons/primeicons.css';
import { useMounted } from "@/Hooks/useMounted"
import { LogoIcon } from "../Icons/LogoIcon";

export const HeaderComponent = () => {
    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const mounted = useMounted()

    return (
        <header className="w-full h-20 bg-black flex items-center px-4 shadow-md">
            <div className="flex-1 flex justify-center pl-4">
                <LogoIcon />
            </div>

            <div className="flex justify-end items-center w-[1.5rem]">
                {mounted && (
                    theme === "dark" ? (
                        <span
                            style={{ fontSize: '1.5rem', color: 'white' }}
                            className="cursor-pointer pi pi-sun"
                            onClick={() => setTheme('light')}
                        />
                    ) : (
                        <span
                            style={{ fontSize: '1.5rem', color: 'white' }}
                            className="cursor-pointer pi pi-moon"
                            onClick={() => setTheme('dark')}
                        />
                    )
                )}
            </div>
        </header>
    )
}
