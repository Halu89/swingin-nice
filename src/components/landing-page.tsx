import Link from "next/link";
import { Button } from "~/components/atoms/button";
import type { SVGProps } from "react";

export default function LandingPage() {
    return (
        <div key="1" className={"flex min-h-screen flex-col"}>
            <header
                className={
                    "flex items-center justify-between bg-white px-6 py-4 dark:bg-gray-800 sm:flex-row md:justify-between"
                }
            >
                <Link href="#">
                    <CircleDashedIcon className={"h-6 w-6"} />
                    <span className={"sr-only"}>Swing Dance Association</span>
                </Link>
                <nav className={"space-x-4 sm:flex sm:space-x-6"}>
                    <Link className={"text-sm font-medium hover:underline sm:hidden md:hidden lg:block"} href="#">
                        About
                    </Link>
                    <Link className={"text-sm font-medium hover:underline sm:hidden md:hidden lg:block"} href="#">
                        Events
                    </Link>
                    <Link className={"text-sm font-medium hover:underline sm:hidden md:hidden lg:block"} href="#">
                        Membership
                    </Link>
                    <Link className={"text-sm font-medium hover:underline sm:hidden md:hidden lg:block"} href="#">
                        Contact
                    </Link>
                    <Button className={"lg:hidden"} variant="outline">
                        <MenuIcon className={"h-6 w-6"} />
                        <span className={"sr-only"}>Menu</span>
                    </Button>
                </nav>
            </header>
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
            <footer className={"flex items-center justify-between bg-white px-6 py-4 dark:bg-gray-800"}>
                <div className={"flex space-x-4"}>
                    <Link className={"text-gray-400 hover:text-gray-500 dark:hover:text-gray-400"} href="#">
                        <FacebookIcon className={"h-6 w-6"} />
                    </Link>
                    <Link className={"text-gray-400 hover:text-gray-500 dark:hover:text-gray-400"} href="#">
                        <TwitterIcon className={"h-6 w-6"} />
                    </Link>
                    <Link className={"text-gray-400 hover:text-gray-500 dark:hover:text-gray-400"} href="#">
                        <InstagramIcon className={"h-6 w-6"} />
                    </Link>
                </div>
                <div className={"text-sm text-gray-500 dark:text-gray-400"}>
                    © 2024 Swing Dance Association. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

function CircleDashedIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
            <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
            <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
            <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
            <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
            <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
            <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
            <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
        </svg>
    );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function PartyPopperIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5.8 11.3 2 22l10.7-3.79" />
            <path d="M4 3h.01" />
            <path d="M22 8h.01" />
            <path d="M15 2h.01" />
            <path d="M22 20h.01" />
            <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
            <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
            <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
            <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
        </svg>
    );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}

function UserIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}

function WorkflowIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="8" height="8" x="3" y="3" rx="2" />
            <path d="M7 11v4a2 2 0 0 0 2 2h4" />
            <rect width="8" height="8" x="13" y="13" rx="2" />
        </svg>
    );
}
