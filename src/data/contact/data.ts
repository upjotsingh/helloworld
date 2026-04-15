import { ContactData } from "./types";

export const contactData = {
  title: "Let’s launch your next digital product.",
  description:
    "Tell us about your idea, your timeline, and what success looks like. We’ll reply with a custom plan and quote.",
  fields: [
    { name: "name", placeholder: "Your Name", type: "text" },
    { name: "email", placeholder: "Your Email", type: "email" },
    { name: "project", placeholder: "Project Type", type: "text" },
    { name: "message", placeholder: "Tell us about your goals", type: "textarea" },
  ],
  buttonLabel: "Send Request",
  illustration: "/images/contact-illustration.svg",
} as ContactData;