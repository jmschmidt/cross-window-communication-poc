import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';

import { DEBUG } from './env';

const instance = i18n
  .use(XHR)
  .init({
    debug: DEBUG,
    ns: 'global',
    defaultNS: 'global',
    fallbackNS: 'global',
    // Normalize language codes to lowercase
    lowerCaseLng: true,
    // List of supported languages
    whitelist: ['en-us', 'ja-jp'],
    // Current language
    lng: 'en-us',
    // A fallback language to attempt to load translations from
    // (set to `null` to prevent multiple requests for multiple JSON files)
    fallbackLng: 'en-us',
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
      loadPath: '{{lng}}/{{ns}}',
      parse: (data) => data,
      ajax: loadLocales,
    },
  });

/**
 * Use dynamic import()s to allow for async loading and cache busting of locale files
 *
 * @param {String} url - The value of `backend.loadPath`
 * @param {Object} options - The `backend` options object specified above
 * @param {Function} callback - A method to execute after loading the locale
 * @param {Object} data
 */
function loadLocales(url, options, callback, data) {
  import(`./assets/locales/${url}.json`).then((locale) => {
    callback(locale, {status: '200'});
  }).catch((err) => {
    console.error('Error importing locale file:', err);
    callback(null, {status: '404'});
  });
}

export default instance;
