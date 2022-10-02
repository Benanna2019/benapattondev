import { LayoutGroup, motion } from "framer-motion";
import { useRouter } from "next/router";
import * as React from "react";

import { ListContainer } from "../../components/ListDetail/ListContainer";
import { trpc } from "../../utils/trpc";

import { ListLoadMore } from "../ListDetail/ListLoadMore";
import { LoadingSpinner } from "../LoadingSpinner";
import { LinksListItem } from "./LinkListItem";
import { LinksTitlebar } from "./LinksTitlebar";

export const LinksContext = React.createContext({
  tag: null,
  setTag: (tag: string) => {},
});

export function LinksList() {
  const router = useRouter();

  const links = trpc.useQuery(["links.allLinks"]);
  const { data, isLoading, isError } = links;
  const tagQuery = router.query?.tag as string;
  const [tag, setTag] = React.useState(tagQuery);
  const [isVisible, setIsVisible] = React.useState(false);
  const [scrollContainerRef, setScrollContainerRef] = React.useState(null);

  const defaultContextValue = {
    tag,
    setTag,
  };

  if (isLoading) {
    return (
      <ListContainer onRef={setScrollContainerRef}>
        <LinksTitlebar scrollContainerRef={scrollContainerRef} />
        <div className="flex flex-1 items-center justify-center">
          <LoadingSpinner />
        </div>
      </ListContainer>
    );
  }

  if (isError) return null;

  return (
    //@ts-ignore
    <LinksContext.Provider value={defaultContextValue}>
      <ListContainer data-cy="Links-list" onRef={setScrollContainerRef}>
        <LinksTitlebar scrollContainerRef={scrollContainerRef} />
        <LayoutGroup>
          <div className="lg:space-y-1 lg:p-3">
            {data?.allLinks.map((link: any) => {
              console.log("link to map over", link);
              const active = router.query.slug === link.slug;
              return (
                <motion.div layout key={link._id}>
                  <LinksListItem active={active} link={link} />
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </ListContainer>
    </LinksContext.Provider>
  );
}
