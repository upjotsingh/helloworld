export type ContactData = {
  title: string;
  description: string;
  fields: {
    name: string;
    placeholder: string;
    type: string;
  }[];
  buttonLabel: string;
  illustration: string;
};