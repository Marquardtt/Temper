"use client"

import { useMounted } from "@/Hooks/useMounted";

export default function Home() {

  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <main className="h-full">
      <section className="h-[100vh] bg-white dark:bg-purple-100 flex justify-center items-center font-bold duration-300 transition-all">Coming soon.</section>
    </main>
  );
}
