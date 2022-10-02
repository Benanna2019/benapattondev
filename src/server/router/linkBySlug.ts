import { createRouter } from "./context";
import Sanity from "../../clients/sanity";
import { z } from "zod";

const sanity = Sanity();

export const linkBySlugRouter = createRouter().query("linkBySlug", {
  input: z
    .object({
      slug: z.string().nullish(),
    })
    .nullish(),
  async resolve({ input }) {
    return {
      link: await sanity.getLinkBySlug(input?.slug as string),
    };
  },
});
