import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "~utils/utils.ts";
import Image from "next/image";
import BackgroundImage from "~root/public/dancers.jpg";
import { getEventsSummary } from "~utils/api.ts";
import EventSummary from "~/components/molecules/EventSummary.tsx";

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
        <div className={"flex flex-col items-center justify-center text-center"}>
            <div className="flex h-full items-center flex-col lg:flex-row">
                <div className="lg:w-1/2 ">
                    <Image src={BackgroundImage} alt={""} quality={100} className={"lg:rounded-r-xl"} />
                </div>
                <div className={"grid lg:w-1/2 items-center py-4 lg:py-0"}>
                    <div>
                        <h1 className={"text-4xl font-bold"}>Bienvenue chez Swingin&apos; Nice</h1>
                        <p className={"mt-4 max-w-prose text-gray-400 dark:text-gray-400"}>
                            Cette page est destinée à promouvoir les danses Swing sur Nice et échanger les informations
                            concernant les écoles, les soirées et tout autres événements susceptibles d&apos;intéresser
                            les danseurs de swing: Lindy Hop, Charleston, Jazz Roots.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const sectionVariants = cva("py-2 lg:py-8 dark:bg-gray-800", {
    variants: {
        isEven: {
            true: "bg-orange-100",
            false: "lg:py-12 bg-orange-50",
        },
    },
    defaultVariants: {
        isEven: true,
    },
});

const Section = ({ isEven, children }: { children: React.ReactNode } & VariantProps<typeof sectionVariants>) => {
    return <section className={cn(sectionVariants({ isEven }))}>{children}</section>;
};

const Events = async () => {
    const events = await getEventsSummary();
    if (!events) return null;

    return (
        <div className={"container mx-auto px-6"}>
            <h2 className={"text-center text-3xl font-bold"}>Évènements à venir</h2>
            <div className={"mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"}>
                {events.map((event) => (
                    <EventSummary
                        key={event._id}
                        title={event.name}
                        date={event.date}
                        summary={event.summary}
                    />
                ))}
            </div>
        </div>
    );
};
export default LandingPage;