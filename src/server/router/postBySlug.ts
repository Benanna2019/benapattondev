import { createRouter } from "./context";
import Sanity from "../../clients/sanity";
import { z } from "zod";

const sanity = Sanity();

export const postBySlugRouter = createRouter().query("postBySlug", {
  input: z
    .object({
      slug: z.string().nullish(),
    })
    .nullish(),
  async resolve({ input }) {
    return {
      post: await sanity.getPostBySlug(input?.slug as string),
    };
  },
});
