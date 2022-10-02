import { z } from "zod";

export interface CategoryType {
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
  title?: string;
}

export const Category = z.object({
  _createdAt: z.string().nullish(),
  _id: z.string().nullish(),
  _rev: z.string().nullish(),
  _type: z.literal("category").nullish(),
  _updatedAt: z.string().nullish(),
  title: z.string().nullish(),
});

export const Categories = z.array(Category);
