import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Convert a UUID to a DOM id
 * uuids are not valid DOM ids because they contain hyphens and can start with a number
 */
export function uuidToDomId(uuid?: string) {
    const prefix = "uuid_"; // prefix to avoid starting with a number
    if (!uuid) return prefix + Math.random();
    return prefix + uuid.replace(/-/g, "_");
};