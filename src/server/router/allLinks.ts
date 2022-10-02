import { createRouter } from "./context";
import Sanity from "../../clients/sanity";

const sanity = Sanity();

export const allLinksRouter = createRouter().query("allLinks", {
  async resolve() {
    return {
      allLinks: await sanity.getAllLinks(),
    };
  },
});
