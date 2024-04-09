import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from "./../../../../public/locales/en/translation.json";
import translationRU from "./../../../../public/locales/ru/translation.json";

const resources = {
    en: {
        translation: translationEN,
    },
    ru: {
        translation: translationRU,
    },
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: __IS_DEV__,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources,
        // backend: {
        //     loadPath: '/locales/{{lng}}/{{ns}}.json',
        // },
    });

export default i18n;
