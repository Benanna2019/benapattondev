import * as React from "react";
import { timestampToCleanTime } from "../../../lib/transformers";
import { Detail } from "../ListDetail/Detail";
import { TitleBar } from "../ListDetail/TitleBar";
import { MarkdownRenderer } from "../MarkdownRenderer";

export default function PostDetail({ postInfo }: any) {
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);

  const { data, isLoading, isError } = postInfo;
  console.log("the postInfo from PostDetail postInfo: ", postInfo);

  if (isLoading) {
    return <Detail.Loading />;
  }

  if (!data?.post || isError) {
    return <Detail.Null />;
  }

  const { post } = data;
  const publishedAt = timestampToCleanTime({ timestamp: post[0].date });
  return (
    <>
      <Detail.Container data-cy="post-detail" ref={scrollContainerRef}>
        <TitleBar
          backButton
          globalMenu={false}
          backButtonHref={"/writing"}
          magicTitle
          title={post[0].title}
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
        />

        <Detail.ContentContainer>
          <Detail.Header>
            <Detail.Title ref={titleRef}>{post[0].title}</Detail.Title>
            <span
              title={publishedAt.raw}
              className="text-tertiary inline-block leading-snug"
            >
              {publishedAt.formatted}
            </span>
          </Detail.Header>

          <MarkdownRenderer children={post[0].body} className="prose mt-8" />

          {/* bottom padding to give space between post content and comments */}
          <div className="py-6" />
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  );
}
