import Head from "next/head";
import * as React from "react";
import { timestampToCleanTime } from "../../../lib/transformers";
import { Detail } from "../ListDetail/Detail";
import { TitleBar } from "../ListDetail/TitleBar";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { Tags } from "../Tag";

export default function PostDetail({ postInfo }: any) {
  const scrollContainerRef = React.useRef(null);
  const titleRef = React.useRef(null);

  const { data, isLoading, isError } = postInfo;

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
      <Head>
        <title>{post[0].title}</title>
        <meta name={post[0].title} content={post[0].excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <Tags tags={post[0].categories} />
            <Detail.Title ref={titleRef}>{post[0].title}</Detail.Title>
            <span
              title={publishedAt.raw}
              className="text-tertiary inline-block leading-snug"
            >
              {publishedAt.formatted}
            </span>
          </Detail.Header>

          <MarkdownRenderer
            children={post[0].body}
            className="text-mahogony mt-8"
          />

          {/* bottom padding to give space between post content and comments */}
          <div className="py-6" />
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  );
}
