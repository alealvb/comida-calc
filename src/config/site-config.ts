import type { MainNavItem, SidebarNavItem } from "~/types/nav";

export type SiteConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  name: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  name: "comida calc",
  description: "A simple app to track your diet and calories",

  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dishes",
      href: "/dishes",
    },
  ],
  sidebarNav: [
    // {
    //   title: "Getting Started",
    //   items: [
    //     {
    //       title: "About",
    //       href: "/docs/about",
    //       items: [],
    //     },
    //   ],
    // },
    // {
    //   title: "Installation",
    //   items: [
    //     {
    //       title: "Manual",
    //       href: "/docs/installation/manual",
    //       items: [],
    //     },
    //   ],
    // },
  ],
};

