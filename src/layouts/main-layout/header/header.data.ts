import { APP_ROUTES } from "@/constants/routes";
import React from "react";

type IconComponentType = React.FC<any>;

export interface NavLinkItem {
  title: string;
  path: string;
  icon?: string | IconComponentType;
  children?: NavLinkItem[];
}

export const navLinksData: NavLinkItem[] = [
  {
    title: "Home",
    path: APP_ROUTES.HOME,
  },
  {
    title: "About Us",
    path: APP_ROUTES.ABOUT_US,
  },
  {
    title: "Products",
    path: APP_ROUTES.SERVICES,
  },
  {
    title: "Use Cases",
    path: APP_ROUTES.PRICING,
  },
  {
    title: "Careers",
    path: APP_ROUTES.CAREERS,
  },
  {
    title: "Developers",
    path: "",
    children: [
      {
        title: "Documentations",
        path: APP_ROUTES.COMING_SOON,
      },
      {
        title: "API References",
        path: APP_ROUTES.COMING_SOON,
      },
      {
        title: "Product Demos",
        path: APP_ROUTES.COMING_SOON,
      },
    ],
  },
  {
    title: "Contact Us",
    path: APP_ROUTES.CONTACT_US,
  },
];
