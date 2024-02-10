"use client";
import type { FullEvent } from "~root/sanity/schema";
import React from "react";
import { uuidToDomId } from "~utils/utils.ts";
import useIntersectObserver from "~hooks/useIntersectObserver.ts";

const TableOfContents = ({ events }: { events: FullEvent[] }) => {
    const { activeId } = useIntersectObserver(".event");

    return (
        <div className={"sticky top-16 hidden max-w-72 rounded border p-4 lg:block"}>
            <h2 className={"text-3xl"}>Évènements</h2>
            <ul className={"mt-2 pl-2"}>
                {events.map((event) => (
                    <li key={event._id}>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector(`#${uuidToDomId(event._id)}`)
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={
                                "cursor-pointer text-accent hover:underline " +
                                (activeId === uuidToDomId(event._id) ? "font-bold hover:no-underline" : "")
                            }
                        >
                            {event.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TableOfContents;
