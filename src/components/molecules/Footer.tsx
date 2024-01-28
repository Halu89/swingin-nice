import {FacebookIcon, IconLink, InstagramIcon, TwitterIcon} from "~atoms/icons";
import React from "react";

const Footer = () => {
    return (
        <footer className={"flex items-center justify-between bg-white px-6 py-4 dark:bg-gray-800"}>
            <div className={"flex space-x-4"}>
                <IconLink href={"#"} icon={FacebookIcon} />
                <IconLink href={"#"} icon={TwitterIcon} />
                <IconLink href={"#"} icon={InstagramIcon} />
            </div>
            <div className={"text-sm text-gray-500 dark:text-gray-400"}>
                © 2024 Swing Dance Association. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;