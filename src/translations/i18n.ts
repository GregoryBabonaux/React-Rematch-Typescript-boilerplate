import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: require('./fr.json')
  }
};

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr",
    // keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });