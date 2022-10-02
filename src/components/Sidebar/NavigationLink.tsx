import Link from "next/link";
import * as React from "react";

import { GlobalNavigationContext } from "../Providers";

interface NavLink {
  link: {
    href: any;
    label: any;
    icon: any;
    trailingAccessory: any;
    trailingAction: any;
    isActive?: boolean;
    isExternal: any;
  };
}

export function NavigationLink({
  link: {
    href,
    label,
    icon: Icon,
    trailingAccessory: Accessory,
    trailingAction: Action,
    isActive,
    isExternal,
  },
}: NavLink) {
  const { setIsOpen } = React.useContext(GlobalNavigationContext);
  return (
    <li
      className="flex items-stretch space-x-1"
      onClick={() => setIsOpen(false)}
    >
      <Link href={href}>
        <a
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={`flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  ${
            isActive
              ? "bg-yala-purple text-white hover:bg-black hover:text-white dark:bg-yala-purple dark:text-white dark:hover:bg-yala-purple dark:hover:text-white"
              : "text-gray-700 dark:text-gray-100 sm:hover:bg-gray-100 sm:hover:text-gray-900 sm:dark:hover:bg-yala-purple sm:dark:hover:text-gray-200"
          }`}
        >
          <span className="flex items-center justify-center w-4">
            <Icon />
          </span>
          <span className="flex-1">{label}</span>
          {Accessory && (
            <span className="flex items-center justify-center w-4 text-black text-opacity-40 dark:text-white">
              <Accessory />
            </span>
          )}
        </a>
      </Link>
      {Action && <Action />}
    </li>
  );
}
