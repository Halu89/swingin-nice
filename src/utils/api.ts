import { createClient, groq } from "next-sanity";
import { type School, type EventType } from "~root/sanity/schema";
import { apiVersion, dataset, projectId, useCdn } from "~root/sanity/env.ts";

const clientConfig = {
    projectId,
    dataset,
    useCdn,
    apiVersion: apiVersion,
};

export async function getSchools(): Promise<School[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "school"]{
      _id,
      _createdAt,
      name,
      url,
      description
    }`,
    );
}

export async function getEvents(): Promise<EventType[]> {
     return createClient(clientConfig).fetch(
         groq`*[_type == "event"] { 
       _id,
       _createdAt,
       name,
       "image": image.asset->url,
       url,
       description
     }`,
     );
}
