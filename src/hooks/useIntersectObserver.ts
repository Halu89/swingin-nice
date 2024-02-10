import { useEffect, useRef, useState } from "react";

/**
 * useIntersectObserver
 * @description Hook to use the IntersectionObserver API
 * @param selector - The css selector of the elements to observe (
 */
const useIntersectObserver = (selector: string) => {
    const observer = useRef<IntersectionObserver>();
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleObserver, {
            rootMargin: "-20% 0% -35% 0px",
        });

        const elements = document.querySelectorAll(selector);
        elements.forEach((elem) => observer.current?.observe(elem));
        return () => observer.current?.disconnect();
    }, [selector]);

    return { activeId };
};

export default useIntersectObserver;
