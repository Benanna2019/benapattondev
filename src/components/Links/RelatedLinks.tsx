import Link from "next/link";
import * as React from "react";
import { trpc } from "../../utils/trpc";

export function RelatedLinks({ link }: any) {
  const relatedLinks = trpc.useQuery([
    "links.linkByHost",
    {
      host: link[0].host,
    },
  ]);

  const { data, isLoading, isError } = relatedLinks;

  if (isLoading) return null;

  const { host, url } = link;
  const related = data?.host.filter(
    (link: any) => link.host === host && link.url !== url
  );

  if (related.length === 0) return null;

  function handleClick(e: any) {
    if (e.metaKey) {
      e.preventDefault();
      e.stopPropagation();
      //@ts-ignore
      window.open(link.url, "_blank").focus();
    }
  }

  return (
    <div className="mx-auto mb-4 w-full max-w-3xl px-4 md:mb-8 md:px-8">
      <div className="rounded-md border border-t border-gray-150 bg-gray-100 px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
        <p className="text-quaternary py-2 text-xs font-medium uppercase leading-snug">
          {related.length} more from {link.host}
        </p>
        <ul>
          {related.map((r: any) => (
            <li key={r._id}>
              <Link href="/links/[slug]" as={`/links/${r.slug}`}>
                <a
                  onClick={handleClick}
                  className="text-primary -mx-2 flex justify-between rounded-md px-2 py-2 font-medium line-clamp-1 hover:bg-gray-200 dark:hover:bg-gray-700 md:-mx-3 md:px-3"
                >
                  <span>{r.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
