import Link from "next/link";
import * as React from "react";

interface Props {
  title?: string;
  active: boolean;
  href: string;
  as?: string;
  description?: string | React.ReactElement | null;
  byline?: string | React.ReactElement;
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
  return (
    <Link href={href} as={as}>
      <a
        onClick={onClick && onClick}
        className={`flex space-x-3 border-b border-gray-100 py-3 px-3.5 text-sm dark:border-gray-900 lg:rounded-sm lg:border-none lg:py-2  ${
          active
            ? "bg-black dark:bg-yala-purple"
            : "sm:hover:bg-gray-200 sm:dark:hover:bg-yala-purple"
        }`}
      >
        {leadingAccessory && <>{leadingAccessory}</>}
        <div className="flex flex-col justify-center space-y-1">
          <div
            className={`font-medium line-clamp-3 ${
              active ? "text-white font-bold" : "text-gray-1000 dark:text-white"
            }`}
          >
            {title}
          </div>
          {description && (
            <div
              className={`line-clamp-2 ${
                active
                  ? "text-white text-opacity-80"
                  : "text-gray-1000 text-opacity-60 dark:text-white"
              }`}
            >
              {description}
            </div>
          )}
          {byline && (
            <div
              className={`line-clamp-1  ${
                active
                  ? "text-white text-opacity-90"
                  : "text-gray-1000 text-opacity-40 dark:text-white dark:text-opacity-60"
              }`}
            >
              {byline}
            </div>
          )}
        </div>
      </a>
    </Link>
  );
}
