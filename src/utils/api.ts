import { createClient, groq } from "next-sanity";
import type { School, EventSummary, FullEvent } from "~root/sanity/schema";
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

export async function getEvents(): Promise<FullEvent[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "event"] | order(_id desc) { 
       _id,
       date,
       summary,
       name,
       "image": image.asset->url,
       description
     }[0...10]`,
    );
}

export async function getEventsSummary(): Promise<EventSummary[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "event" && featured == true] | order(_id desc) {
       _id,
       date,
       summary,
       name,
       "image": image.asset->url,
     }[0...3]`,
    );
}
