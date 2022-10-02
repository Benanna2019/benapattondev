import { createRouter } from "./context";
import Sanity from "../../clients/sanity";

const sanity = Sanity();

export const featuredArticleRouter = createRouter().query("featuredArticles", {
  async resolve() {
    return {
      featuredArticles: await sanity.getFeaturedArticles(),
    };
  },
});
