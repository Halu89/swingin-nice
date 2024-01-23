import LandingPage from "~/components/landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Swingin Nice",
    description: "Association dediée à organiser des evenements de danse Lindy Hop autour de la ville de Nice, France.",
    authors: [{ url: "https://cbriand.fr", name: "Corentin Briand" }],
};

import "~styles/globals.css";

export default function Home() {
    return <LandingPage />;
}
