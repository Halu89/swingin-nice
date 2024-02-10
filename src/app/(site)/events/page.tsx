import React from "react";
import { getEvents } from "~utils/api.ts";
import { type FullEvent } from "~root/sanity/schema";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import TableOfContents from "~/components/molecules/ContentTable";
import { uuidToDomId } from "~utils/utils.ts";

const Event = ({ event }: { event: FullEvent }) => (
    <div className={"event prose rounded border-2 border-accent p-4 lg:p-8"} id={uuidToDomId(event._id)}>
        <h2 className={"mb-4 text-xl font-bold text-accent"}>{event.name}</h2>
        {event.image ? <Image width={750} height={450} src={event.image} alt={""} /> : null}
        <div className={"portable-text"}>{event.description && <PortableText value={event?.description} />}</div>
    </div>
);

const Events = async () => {
    const events = await getEvents();

    return (
        <main className={"flex gap-8 bg-orange-50 p-3 lg:p-6"}>
            <div>
                <TableOfContents events={events} />
            </div>
            <div className={"mt-8 flex flex-col items-center gap-5"}>
                {events?.map((event) => {
                    return <Event key={event._id} event={event} />;
                })}
            </div>
        </main>
    );
};

export default Events;
