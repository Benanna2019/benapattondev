import { defaultSEO, extendSEO } from "./seo";

const routes = {
  home: {
    label: "Home",
    path: "/",
    seo: defaultSEO,
  },
  writing: {
    label: "Writing",
    path: "/writing",
    seo: extendSEO({
      title: "Writing",
      description: "Thinking out loud about software design and development.",
      image: "og/writing.png",
      url: "writing",
    }),
  },
  links: {
    label: "Links",
    path: "/links",
    seo: extendSEO({
      title: "Links",
      description: "Internet things, saved for later.",
      image: "og/links.png",
      url: "links",
    }),
  },
};

export default routes;
