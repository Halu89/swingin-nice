import React from "react";
import { getSchools } from "~utils/api.ts";
import { School } from "~root/sanity/schema";
import { PortableText } from "@portabletext/react";
import { Button } from "~/components/atoms/button";
import Link from "next/link";

const School = ({ school }: { school: School }) => (
    <div className={"rounded border border-accent p-8"}>
        <h2 className={"mb-4 text-xl font-bold text-accent"}>{school.name}</h2>
        <div className={"portable-text"}>
            <PortableText value={school.description} />
        </div>
        <Link href={school.url} target={"_blank"}>
            <Button size="lg" className={"mt-4"}>
                Voir le site
            </Button>
        </Link>
    </div>
);

const Schools = async () => {
    const schools = await getSchools();

    return (
        <main className={"bg-light2 p-6"}>
            <h1 className={"text-3xl text-accent"}>Écoles de danse</h1>
            <div className={"mt-8 grid grid-cols-1 gap-3 lg:grid-cols-2"}>
                {schools?.map((school) => {
                    return <School key={school._id} school={school} />;
                })}
            </div>
        </main>
    );
};

export default Schools;
