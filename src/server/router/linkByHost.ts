import { createRouter } from "./context";
import Sanity from "../../clients/sanity";
import { z } from "zod";

const sanity = Sanity();

export const linkByHostRouter = createRouter().query("linkByHost", {
  input: z
    .object({
      host: z.string().nullish(),
    })
    .nullish(),
  async resolve({ input }) {
    return {
      host: await sanity.getLinkByHost(input?.host as string),
    };
  },
});
