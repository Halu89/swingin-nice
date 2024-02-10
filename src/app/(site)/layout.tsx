import React from "react";
import "~styles/globals.css";
import Navbar from "~/components/molecules/Navbar.tsx";
import Footer from "~/components/molecules/Footer.tsx";
import Providers from "~/components/molecules/providers.tsx";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <div key="1" className={"grid min-h-full grid-rows-[auto_1fr_auto] dark:prose-invert"}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </Providers>
    );
}
