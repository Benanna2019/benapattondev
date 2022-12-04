import Link from "next/link";
import * as React from "react";
import { getDate, parseISO, format } from "date-fns";

interface Props {
  title?: string;
  active: boolean;
  href: string;
  as?: string;
  description?: string | React.ReactElement | null;
  byline: string | React.ReactElement;
  leadingAccessory?: React.ReactElement;
  onClick?: (e: any) => void;
}

export function ListItem({
  title,
  description,
  byline,
  href,
  as,
  active,
  leadingAccessory,
  onClick,
}: Props) {
  const formattedDate = getDate(parseISO(byline as string));
  return (
    <Link href={href} as={as}>
      <a
        onClick={onClick && onClick}
        className={`flex space-x-3 border-b border-gray-100 py-3 px-3.5 text-sm dark:border-gray-900 lg:rounded-sm lg:border-none lg:py-2  ${
          active ? "text-mahogony" : ""
        }`}
      >
        {leadingAccessory && <>{leadingAccessory}</>}
        <div
          className={`${
            byline && typeof byline === "string"
              ? "flex justify-between space-x-5 space-y-1"
              : "flex flex-col justify-center"
          }`}
        >
          {byline && typeof byline === "string" ? (
            <>
              <div
                className={`flex flex-col justify-center text-center w-18  rounded-lg ${
                  active
                    ? "text-mahogony font-bold text-opacity-90 bg-slate-100 "
                    : "text-mahogony text-opacity-80"
                }`}
              >
                <div className="text-xs w-12 pt-2">
                  {format(parseISO(byline), "MMM")}
                </div>
                <div className="text-2xl text-mahogony font-semibold w-12 pb-2">
                  {formattedDate}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div
                  className={`font-medium line-clamp-1 ${
                    active ? "text-mahogony font-bold" : "text-mahogony"
                  }`}
                >
                  {title}
                </div>
                {description && (
                  <div
                    className={`line-clamp-1 ${
                      active
                        ? "text-mahogony font-semibold"
                        : "text-mahogony text-opacity-80"
                    }`}
                  >
                    {description}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center">
                <div
                  className={`font-medium line-clamp-1 ${
                    active ? "text-mahogony font-bold" : "text-mahogony"
                  }`}
                >
                  {title}
                </div>
                {description && (
                  <div
                    className={`line-clamp-1 ${
                      active
                        ? "text-mahogony text-opacity-80"
                        : "text-mahogony text-opacity-60 "
                    }`}
                  >
                    {description}
                  </div>
                )}
                <div
                  className={`line-clamp-1 ${
                    active
                      ? "text-mahogony text-opacity-90"
                      : "text-mahogony text-opacity-40 "
                  }`}
                >
                  {byline}
                </div>
              </div>
            </>
          )}
        </div>
      </a>
    </Link>
  );
}
