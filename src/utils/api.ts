import { createClient, groq } from "next-sanity";
import { type School } from "~root/sanity/schema";
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

// export async function getProject(slug: string): Promise<Project> {
//     return createClient(clientConfig).fetch(
//         groq`*[_type == "project" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content
//     }`,
//         { slug },
//     );
// }