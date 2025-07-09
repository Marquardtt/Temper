"use client"

import 'primeicons/primeicons.css';
import { useTheme } from "next-themes";
import { useMounted } from "@/Hooks/useMounted"
import { LogoIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import { easeInOut, easeOut } from "framer-motion";

export const HeaderComponent = () => {
    const { theme, setTheme } = useTheme()
    const mounted = useMounted()

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easeInOut,
            },
        },
    };

    return (
        <header className="w-full h-20 bg-black flex items-center px-4 shadow-md">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-center ">
                <LogoIcon />
            </div>
            <div className="flex-1 flex justify-end items-center gap-12">
                <div className="flex justify-center items-center gap-4">
                    <div>
                        <span className="text-white font-bold text-lg">Login</span>
                    </div>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            backgroundPosition: "100% 0%",
                            transition: {
                                duration: 0.4,
                                ease: easeOut,
                            },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="shadow-custom cursor-pointer px-6 py-2 rounded-md font-medium bg-gradient-to-br from-[#6F3FC3] to-[#9377C5] bg-[length:200%_100%] text-white"
                    >
                        Register
                    </motion.div>


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