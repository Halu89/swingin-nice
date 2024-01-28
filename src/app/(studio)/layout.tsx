import React from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Swingin Nice",
    description: "Manage content for the main site",
    robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
