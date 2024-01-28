import React from "react";
import "~styles/globals.css";
import Navbar from "~/components/molecules/Navbar.tsx";
import Footer from "~/components/molecules/Footer.tsx";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div key="1" className={"grid min-h-full grid-rows-[auto_1fr_auto]"}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
