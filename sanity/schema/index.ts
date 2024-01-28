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
            name: "url",
            title: "URL",
            type: "url",
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

export type EventType = {
    _id: string;
    createdAt: Date;
    name: string;
    url: string;
    image: string;
    description: PortableTextBlock[];
};

const schemaTypes = [school, event];
export const schema: { types: SchemaTypeDefinition[] } = {
    types: schemaTypes,
};
