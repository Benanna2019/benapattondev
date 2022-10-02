import Link from "next/link";
import { NextSeo } from "next-seo";
import * as React from "react";
import { Link as LinkIcon } from "react-feather";

import { PrimaryButton } from "../../components/Button";
import { Detail } from "../../components/ListDetail/Detail";
import { TitleBar } from "../../components/ListDetail/TitleBar";
import { Tags } from "../../components/Tag";
import routes from "../../utils/config/routes";

import { MarkdownRenderer } from "../MarkdownRenderer";
import { RelatedLinks } from "./RelatedLinks";

export function LinksDetail({ linkInfo }: any) {
  const { data, isLoading, isError } = linkInfo;
  const scrollContainerRef: React.RefObject<HTMLDivElement> =
    React.useRef(null);
  const titleRef: React.RefObject<HTMLHeadingElement> = React.useRef(null);

  if (isLoading) {
    return <Detail.Loading />;
  }

  if (!data?.link || isError) {
    return <Detail.Null />;
  }

  const { link } = data;

  return (
    <>
      <NextSeo
        title={link[0].title}
        description={link[0].description}
        openGraph={{
          title: link[0].title,
          description: link[0].description,
          images: [
            {
              url: routes.links.seo.image as string,
              alt: routes.links.seo.description,
            },
          ],
        }}
      />
      <Detail.Container data-cy="link-detail" ref={scrollContainerRef}>
        <TitleBar
          backButton
          globalMenu={false}
          backButtonHref={"/links"}
          magicTitle
          title={link[0].title}
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
        />

        <Detail.ContentContainer>
          <Detail.Header>
            <Tags tags={link[0].tags} />
            <Link href={link[0].slug}>
              <a target="_blank" rel="noopener" className="block">
                <Detail.Title ref={titleRef}>{link[0].title}</Detail.Title>
              </a>
            </Link>
            <Link href={link[0].slug}>
              <a
                target="_blank"
                rel="noopener"
                className="text-tertiary flex items-center space-x-2 leading-snug"
              >
                {link[0].faviconUrl && (
                  <img
                    src={link[0].faviconUrl}
                    alt={`Favicon for ${link[0].host}`}
                    className="h-4 w-4"
                    width="16px"
                    height="16px"
                  />
                )}
                <span>{link[0].host}</span>
              </a>
            </Link>
            {link[0].description && (
              <MarkdownRenderer
                className="prose italic opacity-70"
                children={link[0].description}
                variant="comment"
              />
            )}
          </Detail.Header>
          <div className="mt-6">
            <PrimaryButton
              size="large"
              href={link[0].slug}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon size={14} />
              <span>Visit</span>
            </PrimaryButton>
          </div>
        </Detail.ContentContainer>

        <RelatedLinks link={link} />
      </Detail.Container>
    </>
  );
}
