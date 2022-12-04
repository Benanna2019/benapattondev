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
              ? "text-mahogony hover:bg-mahogony hover:bg-opacity-20"
              : "text-mahogony sm:hover:bg-mahogony sm:hover:bg-opacity-20"
          }`}
        >
          <span className="flex items-center justify-center w-4 text-mahogony">
            <Icon />
          </span>
          <span className="flex-1">{label}</span>
          {Accessory && (
            <span className="flex items-center justify-center w-4 text-mahogony">
              <Accessory />
            </span>
          )}
        </a>
      </Link>
      {Action && <Action />}
    </li>
  );
}
