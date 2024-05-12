import { FacebookIcon, IconLink, InstagramIcon } from "~atoms/icons";
import React from "react";

const Footer = () => {
    return (
        <footer className={"flex items-center justify-between bg-primary px-6 py-4 text-accent"}>
            <div className={"flex space-x-4"}>
                <IconLink href={"https://www.facebook.com/SwinginNice"} icon={FacebookIcon} />
                <IconLink href={"https://www.instagram.com/swingin_nice/"} icon={InstagramIcon} />
            </div>
            <div className={"text-muted-foreground text-sm"}>© 2024 Swingin&apos; Nice.</div>
        </footer>
    );
};

export default Footer;
