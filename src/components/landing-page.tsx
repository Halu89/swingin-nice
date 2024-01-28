import Link from "next/link";
import React from "react";
import { PartyPopperIcon, UserIcon, WorkflowIcon } from "~atoms/icons";

const MainContent = () => {
    return (
        <main className={"flex-1"}>
            <section className={"flex flex-col items-center justify-center bg-gray-100 py-24 dark:bg-gray-800"}>
                <h1 className={"text-center text-4xl font-bold"}>Join the Swing Dance Revolution!</h1>
                <p className={"mt-4 text-center text-gray-500 dark:text-gray-400"}>
                    Experience the joy of swing dancing with our vibrant community.
                </p>
                <Link
                    className="mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    href="#"
                >
                    Join Now
                </Link>
            </section>
            <section className={"bg-white py-24 dark:bg-gray-800"}>
                <div className={"container mx-auto px-6"}>
                    <h2 className={"text-center text-3xl font-bold"}>Why Join Us?</h2>
                    <div className={"mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
                        <div className={"flex flex-col items-center text-center"}>
                            <WorkflowIcon className={"mb-4 h-12 w-12"} />
                            <h3 className={"text-xl font-bold"}>Access to Dance Workshops</h3>
                            <p className={"mt-2 text-gray-500 dark:text-gray-400"}>
                                Learn from the best in the industry.
                            </p>
                        </div>
                        <div className={"flex flex-col items-center text-center"}>
                            <PartyPopperIcon className={"mb-4 h-12 w-12"} />
                            <h3 className={"text-xl font-bold"}>Social Events</h3>
                            <p className={"mt-2 text-gray-500 dark:text-gray-400"}>
                                Meet and dance with people who share your passion.
                            </p>
                        </div>
                        <div className={"flex flex-col items-center text-center"}>
                            <UserIcon className={"mb-4 h-12 w-12"} />
                            <h3 className={"text-xl font-bold"}>Supportive Community</h3>
                            <p className={"mt-2 text-gray-500 dark:text-gray-400"}>
                                Join a community that supports and encourages each other.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"bg-gray-100 py-24 dark:bg-gray-800"}>
                <div className={"container mx-auto px-6"}>
                    <h2 className={"text-center text-3xl font-bold"}>Upcoming Events</h2>
                    <div className={"mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"}>
                        <div className={"flex flex-col items-start space-y-2 rounded-lg border p-4"}>
                            <h3 className={"text-lg font-bold"}>Swing Dance Workshop</h3>
                            <p className={"text-gray-500 dark:text-gray-400"}>March 20, 2024</p>
                            <p className={"text-sm text-gray-500 dark:text-gray-400"}>
                                Join us for a fun and interactive swing dance workshop.
                            </p>
                            <Link className={"mt-auto text-indigo-600 hover:underline"} href="#">
                                Learn More
                            </Link>
                        </div>
                        <div className={"flex flex-col items-start space-y-2 rounded-lg border p-4"}>
                            <h3 className={"text-lg font-bold"}>1920s Themed Dance Party</h3>
                            <p className={"text-gray-500 dark:text-gray-400"}>April 5, 2024</p>
                            <p className={"text-sm text-gray-500 dark:text-gray-400"}>
                                Step back in time and enjoy a night of swing dancing.
                            </p>
                            <Link className={"mt-auto text-indigo-600 hover:underline"} href="#">
                                Learn More
                            </Link>
                        </div>
                        <div className={"flex flex-col items-start space-y-2 rounded-lg border p-4"}>
                            <h3 className={"text-lg font-bold"}>Community Meetup</h3>
                            <p className={"text-gray-500 dark:text-gray-400"}>April 20, 2024</p>
                            <p className={"text-sm text-gray-500 dark:text-gray-400"}>
                                Meet other members of the swing dance community.
                            </p>
                            <Link className={"mt-auto text-indigo-600 hover:underline"} href="#">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default function LandingPage() {
    return <MainContent />;
}




