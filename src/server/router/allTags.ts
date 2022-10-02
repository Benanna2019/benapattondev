import { createRouter } from "./context";
import Sanity from "../../clients/sanity";

const sanity = Sanity();

export const allTagsRouter = createRouter().query("allTags", {
  async resolve() {
    return {
      allTags: await sanity.getAllTags(),
    };
  },
});
