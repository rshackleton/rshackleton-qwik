type Collections = {
    articles: {
        data: {
            date: Date;
            draft?: boolean;
            external?: string | undefined;
            summary: string;
            tags?: string[];
            title: string;
        };
        slug: string;
    }[];
};

declare module 'virtual:mdx-collection' {
  export const collections: Collections;
}