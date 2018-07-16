import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';

import { DEBUG } from './env';

const instance = i18n
  .use(XHR)
  .init({
    debug: DEBUG,
    // Current language
    lng: 'en-US',
    // A fallback language to attempt to load translations from
    // (set to `null` to prevent multiple requests for multiple JSON files)
    fallbackLng: 'en-US',
    // Only try to load the current language
    load: 'currentOnly',
    // react-i18next settings
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: false,
      nsMode: 'default'
    },
    // i18next-xhr-backend settings
    backend: {
      loadPath: 'locales/{{lng}}.json',
    },
  });

export default instance;
