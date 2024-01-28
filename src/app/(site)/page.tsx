import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "~utils/utils.ts";
import Link from "next/link";

const LandingPage = () => {
    return (
        <main className={"flex-1 bg-orange-100"}>
            {[Hero, Events].map((Component, index) => (
                <Section isEven={index % 2 === 0} key={index}>
                    <Component />
                </Section>
            ))}
        </main>
    );
};

const Hero = () => {
    return (
        <div className={"mx-3 flex flex-col items-center justify-center text-center"}>
            <h1 className={"text-4xl font-bold"}>Bienvenue chez Swingin&apos; Nice</h1>
            <p className={"mt-4 max-w-prose text-gray-500 dark:text-gray-400"}>
                Cette page est destinée à promouvoir les danses Swing sur Nice et échanger les informations concernant
                les écoles, les soirées et tout autres événements susceptibles d&apos;intéresser les danseurs de swing:
                Lindy Hop, Charleston, Jazz Roots.
            </p>
        </div>
    );
};

const sectionVariants = cva("py-28 dark:bg-gray-800", {
    variants: {
        isEven: {
            true: "bg-orange-100",
            false: "bg-orange-50",
        },
    },
    defaultVariants: {
        isEven: true,
    },
});

const Section = ({ isEven, children }: { children: React.ReactNode } & VariantProps<typeof sectionVariants>) => {
    return <section className={cn(sectionVariants({ isEven }))}>{children}</section>;
};

const Events = () => {
    return (
        <div className={"container mx-auto px-6"}>
            <h2 className={"text-center text-3xl font-bold"}>Evenements à venir</h2>
            <div className={"mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"}>
                <Event
                    title={"Swing Dance Workshop"}
                    date={"March 20, 2024"}
                    description={"Join us for a fun and interactive swing dance workshop."}
                />
                <Event
                    title={"1920s Themed Dance Party"}
                    date={"April 5, 2024"}
                    description={"Step back in time and enjoy a night of swing dancing."}
                />
                <Event
                    title={"Community Meetup"}
                    date={"April 20, 2024"}
                    description={"Meet other members of the swing dance community."}
                />
            </div>
        </div>
    );
};

type EventProps = {
    title: string;
    date: string;
    description: string;
    url?: string;
};
const Event = ({ title, date, description, url = "#" }: EventProps) => {
    return (
        <div className={"flex flex-col items-start space-y-2 rounded-lg border p-4"}>
            <h3 className={"text-lg font-bold"}>{title}</h3>
            <p className={"text-gray-500 dark:text-gray-400"}>{date}</p>
            <p className={"text-sm text-gray-500 dark:text-gray-400"}>{description}</p>
            <Link className={"mt-auto text-indigo-600 hover:underline"} href={url}>
                Plus d&apos;infos
            </Link>
        </div>
    );
};
export default LandingPage;