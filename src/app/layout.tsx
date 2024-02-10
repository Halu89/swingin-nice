import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Swingin Nice",
    description: "Association dediée à organiser des évènements de danse Lindy Hop autour de la ville de Nice, France.",
    authors: [{ url: "https://cbriand.fr", name: "Corentin Briand" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // suppressHydrationWarning is necessary with the dark mode switcher
        <html lang="en" className={"h-screen"} suppressHydrationWarning>
            <body className={"h-screen"}>{children}</body>
        </html>
    );
}
