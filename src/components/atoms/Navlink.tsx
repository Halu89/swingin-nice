import Link from "next/link";
import React from "react";

/**
 * Clickable link in the navigation bar.
 */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link className={"py-3 text-sm font-medium text-accent hover:underline lg:block lg:py-0"} href={href}>
            {children}
        </Link>
    );
}

export default NavLink;
