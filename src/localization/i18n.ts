import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { RootState, store } from "../store";
import en from "./resources/en.json";
import pn from "./resources/pn.json";
import { generateKeyObject } from "./keyGenerator";

export const T = generateKeyObject(en);
export type T = typeof T;

type Language = "en" | "pn";

// const resources: Record<Language, any> = { en, fr };
const resources = {
  en: { translation: en },
  pn: { translation: pn },
};
// // Create a new i18n instance
// const i18n: i18nType = i18next.createInstance();

// const loaders: Record<Language, () => Promise<any>> = {
//   en: () => import('./resources/en.json'),
//   fr: () => import('./resources/fr.json'),
// };

// const loadLanguage = async (lang: Language) => {
//   // Check if already loaded
//   if (i18n.hasResourceBundle(lang, 'translation')) return;

//   const module = await loaders[lang]();
//   i18n.addResourceBundle(lang, 'translation', module.default, true, true);
// };

// Create automatic init
const initialLang = store.getState().preference.language as Language;

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

let currentLang = initialLang;

store.subscribe(() => {
  const nextLang = store.getState().preference.language as Language;
  if (nextLang !== currentLang) {
    currentLang = nextLang;
    i18n.changeLanguage(nextLang);
  }
});

export default i18n;
