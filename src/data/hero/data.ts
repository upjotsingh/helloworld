import { ActionItem } from "./types";

export const heroData = {
  title: "HelloWorld Solutions builds modern websites and mobile apps that grow your business.",
  description:
    "From polished brand sites to native Android and iOS apps, we deliver digital experiences that look brilliant and work beautifully.",
  actions: [
    { label: "Request a Quote", link: "#contact", variant: "primary" },
    { label: "Explore Services", link: "#services", variant: "secondary" },
  ] as ActionItem[],
  image: "/images/hero-illustration.svg",
};