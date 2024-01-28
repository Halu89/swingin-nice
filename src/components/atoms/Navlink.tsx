import Link from "next/link";
import React from "react";

/**
 * Clickable link in the navigation bar.
 */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link className={"text-sm py-3 lg:py-0 text-accent font-medium hover:underline lg:block"} href={href}>
            {children}
        </Link>
    );
}

export default NavLink;
