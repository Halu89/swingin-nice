import { defineType, type PortableTextBlock, type SchemaTypeDefinition } from "sanity";

export const school = defineType({
    name: "school",
    title: "School",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Nom",
            type: "string",
        },
        {
            name: "url",
            title: "Website",
            type: "url",
            options: { source: "name", maxLength: 96 },
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
});

export type School = {
    _id: string;
    createdAt: Date;
    name: string;
    url: string;
    description: PortableTextBlock[];
};

export const event = {
    name: "event",
    title: "Event",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "featured",
            title: "Featured",
            type: "boolean",
            description: "Show this event on the homepage",
        },
        {
            name: "date",
            title: "Date",
            type: "datetime",
        },
        {
            name: "summary",
            title: "Summary",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
} satisfies SchemaTypeDefinition;

export type EventSummary = Partial<{
    _id: string;
    createdAt: Date;
    name: string;
    date: string;
    summary: string;
    image: string;
}>;

export type FullEvent = EventSummary & { description?: PortableTextBlock[] };

const schemaTypes = [school, event];
export const schema: { types: SchemaTypeDefinition[] } = {
    types: schemaTypes,
};
