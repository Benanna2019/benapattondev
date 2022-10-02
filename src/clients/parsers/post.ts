import { z } from "zod";
import { Categories } from "./categories";

export interface Post {
  _id: string;
  author: {
    name: string;
    picture?: string | null;
  };
  categories: {
    title: string;
  }[];
  body: string;
  date: string;
  excerpt: string;
  readingTime: string;
  slug: string;
  title: string;
}

export const SinglePost = z.object({
  _id: z.string(),
  author: z.object({
    name: z.string(),
    picture: z.string().nullish(),
  }),
  categories: Categories,
  body: z.string(),
  date: z.string(),
  excerpt: z.string(),
  readingTime: z.string(),
  slug: z.string(),
  title: z.string(),
  featuredArticle: z.boolean().nullish(),
});

export const PostSchema = z.array(SinglePost);
