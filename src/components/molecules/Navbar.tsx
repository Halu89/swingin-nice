"use client";

import React from "react";
import {Collapse, IconButton, MobileNav, Navbar} from "@material-tailwind/react";
import NavLink from "~atoms/Navlink.tsx";
import Link from "next/link";
import { CircleDashedIcon } from "~atoms/icons";

const TAILWIND_LG_BREADKPOINT = 1024 as const;

const NavList = () => (
    <ul className="flex flex-col items-end gap-2 py-1 lg:flex-row lg:items-center lg:gap-6 lg:py-1.5">
        <NavLink href={"/"}>Accueil</NavLink>
        <NavLink href={"/events"}>Évenements</NavLink>
        <NavLink href={"/schools"}>Leçons</NavLink>
    </ul>
);

export function NavbarDefault() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= TAILWIND_LG_BREADKPOINT && setOpenNav(false));
    }, []);


    return (
        <Navbar placeholder={undefined} className=" bg-primary px-4 py-2">
            <div className="container mx-auto flex items-center justify-between text-accent">
                <Link href="/">
                    <CircleDashedIcon className={"h-6 w-6 text-accent"} />
                    <span className={"sr-only"}>Swingin&apos; Nice</span>
                </Link>
                <div className="hidden lg:block">
                    <NavList />
                </div>

                <IconButton
                    placeholder={undefined}
                    variant="text"
                    className="ml-auto h-8 w-8 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    <MenuIcon isOpen={openNav} />
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    <NavList />
                </div>
            </Collapse>
        </Navbar>
    );
}

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
    return isOpen ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );
};

export default NavbarDefault;
