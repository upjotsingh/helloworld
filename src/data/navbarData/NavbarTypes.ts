type ValueIconType = {
  value: string;
  icon: string;
  link: string;
};

type TabsType = {
  value: string;
  link: string;
};

export type NavbarDataType = {
  socialLinks: ValueIconType[];
  tabs: TabsType[];
};
