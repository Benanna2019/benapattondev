// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { allPostsRouter } from "./allPosts";
import { postBySlugRouter } from "./postBySlug";
import { allTagsRouter } from "./allTags";
import { allLinksRouter } from "./allLinks";
import { linkBySlugRouter } from "./linkBySlug";
import { linkByHostRouter } from "./linkByHost";
import { featuredArticleRouter } from "./featuredArticles";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("posts.", allPostsRouter)
  .merge("posts.", postBySlugRouter)
  .merge("posts.", featuredArticleRouter)
  .merge("tags.", allTagsRouter)
  .merge("links.", allLinksRouter)
  .merge("links.", linkBySlugRouter)
  .merge("links.", linkByHostRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
