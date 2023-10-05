import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationOfEnglish from './assest/locales/en/translationEn.json';
import translationOfArmenian from './assest/locales/hy/translationHy.json';

const resources = {
  en: {
    translation: translationOfEnglish,
  },
  hy: {
    translation: translationOfArmenian,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  // .use(Backend)
  .init({
    resources,
    lng: 'hy',
    fallbackLng: 'hy',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
