"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"


export const HeaderComponent = () => {
    const router = useRouter()
    return (
        <header className="w-full h-20 bg-black flex justify-center items-center">
            <Image className="cursor-pointer" onClick={() => router.push("/")} src={"/temper_logo.png"} height={60} width={180} alt="Temper" />
        </header>
    )
}