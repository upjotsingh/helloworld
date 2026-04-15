import { NavbarDataType } from "./NavbarTypes";

export const NavbarData = (): NavbarDataType => {
  return {
    socialLinks: [
      {
        value: "LinkedIn",
        icon: "/icons/linkedin.svg",
        link: "https://linkedin.com",
      },
      {
        value: "Instagram",
        icon: "/icons/instagram.svg",
        link: "https://instagram.com",
      },
      {
        value: "GitHub",
        icon: "/icons/github.svg",
        link: "https://github.com",
      },
    ],
    tabs: [
      { value: "Home", link: "#home" },
      { value: "Services", link: "#services" },
      { value: "Projects", link: "#projects" },
      { value: "Contact", link: "#contact" },
    ],
  };
};
