import * as React from "react";
import { Link as LinkIcon } from "react-feather";

import { ListItem } from "../../components/ListDetail/ListItem";

interface Props {
  link: {
    _id: string;
    slug: string;
    url: string;
    host: string;
    title: string;
    description: string;
    faviconUrl: string;
  };
  active: boolean;
}

export const LinksListItem = React.memo<Props>(({ link, active }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  function handleClick(e: any, link: Props["link"]) {
    if (e.metaKey) {
      e.preventDefault();
      e.stopPropagation();
      //@ts-ignore
      window.open(link.url, "_blank").focus();
    }
  }

  return (
    <ListItem
      key={link._id}
      title={link.title}
      byline={
        <div className="flex items-center space-x-2">
          {link.faviconUrl && isVisible ? (
            <img
              src={link.faviconUrl}
              alt={`Favicon for ${link.host}`}
              className="h-4 w-4 rounded"
              width="16px"
              height="16px"
            />
          ) : (
            <span className="flex h-4 w-4 items-center justify-center">
              <LinkIcon size={12} />
            </span>
          )}
          <span>{link.host}</span>
        </div>
      }
      active={active}
      href={`/links/${link.slug}`}
      onClick={(e) => handleClick(e, link)}
    />
  );
});
