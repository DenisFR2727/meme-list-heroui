import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { uk } from './uk';

const resources = {
    en: en,
    uk: uk,
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
