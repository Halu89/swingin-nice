import React from "react";
import type { Metadata } from "next";
import "~styles/globals.css";
import Navbar from "~/components/molecules/Navbar.tsx";
import Footer from "~/components/molecules/Footer.tsx";

export const metadata: Metadata = {
    title: "Swingin Nice",
    description: "Association dediée à organiser des evenements de danse Lindy Hop autour de la ville de Nice, France.",
    authors: [{ url: "https://cbriand.fr", name: "Corentin Briand" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body>
              <div key="1" className={"flex min-h-screen flex-col"}>
                  <Navbar />
                  {children}
                  <Footer />
              </div>
          </body>
      </html>
  );
}
