import * as React from "react";
import { trpc } from "../../utils/trpc";
import type { Post } from "../../clients/parsers/post";
import { ListContainer } from "../ListDetail/ListContainer";
import { LoadingSpinner } from "../LoadingSpinner";
import { PostListItem } from "./PostListItem";
import { WritingTitlebar } from "./WritingTitlebar";
import { useRouter } from "next/router";

export const WritingContext = React.createContext({
  filter: "published",
  setFilter: (filter: string) => {},
});

export function PostsList() {
  const router = useRouter();
  const posts = trpc.useQuery(["posts.allPosts"]);
  const { data, isLoading, isError } = posts;
  // do my trpc call to get all posts right here
  const [filter, setFilter] = React.useState("published");
  let [scrollContainerRef, setScrollContainerRef] = React.useState(null);
  const { slug } = router.query;

  if (isLoading) {
    return (
      <ListContainer onRef={setScrollContainerRef}>
        <WritingTitlebar scrollContainerRef={scrollContainerRef} />
        <div className="flex flex-1 items-center justify-center">
          <LoadingSpinner />
        </div>
      </ListContainer>
    );
  }

  const defaultContextValue = {
    filter,
    setFilter,
  };

  return (
    <WritingContext.Provider value={defaultContextValue}>
      <ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
        <WritingTitlebar scrollContainerRef={scrollContainerRef} />

        <div className="lg:space-y-1 lg:p-3">
          {data?.allPosts.map((post: Post) => {
            const active = slug === post.slug; // use url query params or params?.slug

            return <PostListItem key={post._id} post={post} active={active} />;
          })}
        </div>
      </ListContainer>
    </WritingContext.Provider>
  );
}
