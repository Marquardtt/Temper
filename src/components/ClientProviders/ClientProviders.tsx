"use client";

import { ThemeProvider } from "@/components/Theme/ThemeProvider";

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}
