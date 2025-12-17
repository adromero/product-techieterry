import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    decade: z.enum(['1980s', '1990s', '2000s', '2010s', '2020s']),
    author: z.string(),
    tags: z.array(z.string()),
    previousDisillusionment: z.string().optional().nullable(),
    stallmanAside: z.boolean(),
    comments: z.array(z.object({
      author: z.string(),
      date: z.string(),
      content: z.string(),
    })),
  }),
});

export const collections = {
  posts: postsCollection,
};
