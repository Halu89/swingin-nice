import React from "react";
import { getEvents } from "~utils/api.ts";
import { type EventType } from "~root/sanity/schema";
import { PortableText } from "@portabletext/react";
import Image from "next/image"

const Event = ({ event }: { event: EventType }) => (
    <div className={"border-2 border-accent p-8 prose lg:prose-xl"}>
        <h2 className={"mb-4 text-xl font-bold text-accent"}>{event.name}</h2>
        <Image width={50} height={50} src={event.image} alt={""}/>
        <div className={"portable-text"}>
            <PortableText value={event.description} />
        </div>
    </div>
);

const Events = async () => {
    const events = await getEvents();
    
    return (
        <main className={"flex flex-col p-6 align-center"}>
            <div className={"mt-8 flex justify-center"}> 
                {events?.map((event) => {
                    return <Event key={event._id} event={event} />;
                })}
            </div>
        </main>
    );
};

export default Events;
