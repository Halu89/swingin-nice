import React from "react";
import Link from "next/link";
import { CircleDashedIcon, MenuIcon } from "~atoms/icons";
import { Button } from "~atoms/button.tsx";
import NavLink from "~atoms/Navlink.tsx";

const Navbar = () => {
    return (
        <header
            className={
                "flex items-center justify-between bg-primary text-accent px-6 py-4 dark:bg-gray-800 sm:flex-row md:justify-between"
            }
        >
            <Link href="/">
                <CircleDashedIcon className={"h-6 w-6 text-accent"} />
                <span className={"sr-only"}>Swing Dance Association</span>
            </Link>
            <nav className={"space-x-4 sm:flex sm:space-x-6"}>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/events">Events</NavLink>
                <NavLink href="/schools">Lessons</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                {/*<NavLink href="#">Gallery</NavLink>*/}
                <Button className={"lg:hidden"} variant="outline">
                    <MenuIcon className={"h-6 w-6"} />
                    <span className={"sr-only"}>Menu</span>
                </Button>
            </nav>
        </header>
    );
};

export default Navbar;
