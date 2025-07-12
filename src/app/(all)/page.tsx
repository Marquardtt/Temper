"use client"

import { useMounted } from "@/Hooks/useMounted";
import { easeOut, motion } from "framer-motion";

export default function Home() {
  const mounted = useMounted();
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: easeOut } },
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  if (!mounted) return null;

  return (
    <main className="h-full relative bg-white dark:bg-custom-purple overflow-hidden duration-300 transition-all">
      <svg
        viewBox="0 0 1440 779"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute  w-screen h-screen "
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="reveal">
            <motion.rect
              initial={{ x: -1420 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              width="1440"
              height="779"
            />
          </clipPath>
        </defs>

        <motion.path
          clipPath="url(#reveal)"
          d="M95 0C95 0 205.056 205.08 298.5 300.5C383.993 387.801 446.046 429.988 561.5 470C608.795 486.39 650.768 492.114 691.5 492C691.5 492 684.779 433.552 691.5 434C699 434.5 708.5 480 708.5 480H723C723 480 743.5 432 750.5 434C756.914 435.832 735.5 489.673 735.5 489.673C815.967 482.814 893.864 461.381 994.5 470C1170.32 485.058 1441.5 549 1441.5 549V761.5H1295.5C1295.5 761.5 1040.1 645.367 869 606C622.84 549.364 461.753 648.892 223.5 565C135.46 534 97.5 509 0 430C-3.8147e-06 325.636 -3 0 -3 0H95Z"
          fill="#9377C5"
        />
      </svg>

      <section className="h-full flex justify-center items-center font-bold duration-300 transition-all z-30 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col h-full w-full justify-center items-center gap-40 overflow-hidden "
        >
          <motion.span variants={itemVariants} className="text-black dark:text-white">
            Coming soon.
          </motion.span>
        </motion.div>

      </section>
    </main>
  );
}
