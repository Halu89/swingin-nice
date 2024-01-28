import Link from "next/link";
import React from "react";

/**
 * Clickable link in the navigation bar.
 */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link className={"text-sm font-medium hover:underline sm:hidden md:hidden lg:block"} href={href}>
            {children}
        </Link>
    );
}

export default NavLink;
