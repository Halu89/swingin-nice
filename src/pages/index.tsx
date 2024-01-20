import Head from "next/head";
import LandingPage from "~/components/landing-page";

export default function Home() {
    return (
        <>
            <Head>
                <title>Swingin&apos; Nice</title>
                <meta
                    name="description"
                    content="Association dediée à organiser des evenements de danse Lindy Hop autour de la ville de Nice, France."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LandingPage />
        </>
    );
}
