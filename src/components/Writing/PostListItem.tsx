/* eslint-disable react/display-name */
import * as React from "react";
import type { Post } from "../../clients/parsers/post";
import { timestampToCleanTime } from "../../../lib/transformers";
import { ListItem } from "../ListDetail/ListItem";

interface Props {
  post: Post;
  active: boolean;
}

export const PostListItem = React.memo<Props>(({ post, active }) => {
  const publishedAt = timestampToCleanTime({ timestamp: post.date });
  return (
    <ListItem
      key={post._id}
      href={`/writing/${encodeURIComponent(post.slug)}`}
      title={post.title}
      description={post.excerpt}
      byline={post.date}
      active={active}
    />
  );
});
