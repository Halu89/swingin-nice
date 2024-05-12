import DateComponent from "~atoms/DateComponent.tsx";
import React from "react";
import Link from "next/link";

type EventProps = {
    title?: string;
    date?: string;
    summary?: string;
};

const Event = ({ title, date, summary }: EventProps) => {
    return (
        <div className={"flex flex-col items-start space-y-2 rounded-lg border-2 p-4"}>
            <h3 className={"text-lg font-bold"}>{title}</h3>
            {date && (
                <p className={"text-gray-500 dark:text-gray-400"}>
                    <DateComponent date={date} />
                </p>
            )}
            <p className={"text-sm text-gray-500 dark:text-gray-400"}>{summary}</p>
            {/*<MoreInfoLink url={url} />*/}
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Might move to use a slug instead to display details.
const MoreInfoLink = ({ url }: { url?: string }) => {
    if (!url) return null;
    return (
        <Link className={"mt-auto text-indigo-600 hover:underline"} href={url}>
            Plus d&apos;infos
        </Link>
    );
};

export default Event;
