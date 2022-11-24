import { useRouter } from "next/router";

import {
  ExternalLinkIcon,
  GitHubIcon,
  HomeIcon,
  WritingIcon,
  YouTubeIcon,
  LinksIcon,
  LinkedInIcon,
  AppDissectionIcon,
  NewsletterIcon,
} from "../Icon";
import { NavigationLink } from "./NavigationLink";

export function SidebarNavigation() {
  const router = useRouter();
  const sections = [
    {
      label: null,
      items: [
        {
          href: "/",
          label: "Home",
          icon: HomeIcon,
          trailingAccessory: null,
          isActive: router.pathname === "/",
          trailingAction: null,
          isExternal: false,
        },

        {
          href: "/writing",
          label: "Writing",
          icon: WritingIcon,
          trailingAccessory: null,
          isActive: router.pathname === "/writing",
          trailingAction: null,
          isExternal: false,
        },

        {
          href: "/links",
          label: "Links",
          icon: LinksIcon,
          trailingAccessory: null,
          isActive: router.pathname === "/links",
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
    {
      label: "Projects",
      items: [
        {
          href: "https://careerchangers.co",
          label: "Career Changers",
          icon: AppDissectionIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },
        {
          href: "https://ed76h05au5.execute-api.us-east-2.amazonaws.com/",
          label: "My Resume",
          icon: NewsletterIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        // {
        //   href: "https://dunedain.dev",
        //   label: "Web Dev Course",
        //   icon: WebDevCourseIcon,
        //   trailingAccessory: ExternalLinkIcon,
        //   isActive: false,
        //   trailingAction: null,
        //   isExternal: true,
        // },

        // {
        //   href: "https://forwhomthebilltolls.com",
        //   label: "Invoice Manager",
        //   icon: WritingIcon,
        //   trailingAccessory: ExternalLinkIcon,
        //   isActive: false,
        //   trailingAction: null,
        //   isExternal: true,
        // },
      ],
    },
    {
      label: "Online",
      items: [
        {
          href: "https://www.linkedin.com/in/benjaminapatton/",
          label: "LinkedIn",
          icon: LinkedInIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: "https://www.youtube.com/channel/UC-esBYEUGQ6iK1wmw76f5MA",
          label: "YouTube",
          icon: YouTubeIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: "https://github.com/Benanna2019",
          label: "GitHub",
          icon: GitHubIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },
      ],
    },
  ];

  return (
    <div className="flex-1 space-y-1 px-3 py-3">
      {sections.map((section: any, i: number) => {
        return (
          <ul key={i} className="space-y-1">
            {section.label && (
              <h4
                key={i}
                className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-900 text-opacity-40 dark:text-white"
              >
                {section.label}
              </h4>
            )}
            {section.items.map((item: any, j: number) => (
              <NavigationLink key={j} link={item} />
            ))}
          </ul>
        );
      })}
    </div>
  );
}
