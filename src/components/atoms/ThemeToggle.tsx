import { useTheme } from "next-themes";
import React from "react";
import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    return (
        <Expand
            onToggle={(isDark) => setTheme(isDark ? "light" : "dark")}
            reversed={resolvedTheme === "dark"}
            duration={750}
            className={"ml-auto h-8 w-8"}
            placeholder={undefined}
        />
    );
};

export default ThemeToggle;
