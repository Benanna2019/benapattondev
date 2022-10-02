import { createRouter } from "./context";
import Sanity from "../../clients/sanity";

const sanity = Sanity();

export const allPostsRouter = createRouter().query("allPosts", {
  async resolve() {
    return {
      allPosts: await sanity.getAllPosts(),
    };
  },
});
