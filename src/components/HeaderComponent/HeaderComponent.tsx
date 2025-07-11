"use client"

import 'primeicons/primeicons.css';
import { useTheme } from "next-themes";
import { useMounted } from "@/Hooks/useMounted"
import { LogoIcon } from "@/components/Icons";
import { useRouter } from 'next/navigation';

export const HeaderComponent = () => {
    const { theme, setTheme } = useTheme()
    const mounted = useMounted()
    const router = useRouter()

    return (
        <header className="w-full h-20 bg-black flex items-center px-4 shadow-md">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-center ">
                <div className='h-fit w-fit cursor-pointer' onClick={() => router.push('/')}>
                    <LogoIcon />
                </div>
            </div>
            <div className="flex-1 flex justify-end items-center gap-12">
                <div className="flex justify-center items-center gap-4">

                </div>

                <div className="flex justify-end items-center w-[1.5rem] pr-4">
                    {mounted && (
                        theme === "dark" ? (
                            <span
                                style={{ fontSize: '1.5rem', color: 'white' }}
                                className="transition-all duration-500 cursor-pointer pi pi-sun"
                                onClick={() => setTheme('light')}
                            />
                        ) : (
                            <span
                                style={{ fontSize: '1.5rem', color: 'white' }}
                                className="transition-all duration-500 cursor-pointer pi pi-moon"
                                onClick={() => setTheme('dark')}
                            />
                        )
                    )}
                </div>
            </div>
        </header>
    )
}