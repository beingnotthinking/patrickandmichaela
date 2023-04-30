// Declare custom properties for MDX files here
declare module '*.mdx' {
    export const id: string;
    export const title: string;
    export const author: string;
    export const tags: string[];
}