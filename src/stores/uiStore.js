import { intercept, extendObservable, reaction } from 'mobx';

import i18n, { LANGS, WHITELIST_LANGS } from 'i18n.js';


class UIStore {
  constructor(rootStore) {
    this.rootStore = rootStore;

    // We can't yet use decorators in CRA projects without ejecting. We're trying to avoid that so
    // for now use extendObservable() until we can use @observable's when defining class properties
    extendObservable(this, {
      currentLanguage: LANGS.EN_US,
    });

    /**
     * Ensure that whatever value currentLanguage is being set to is in WHITELIST_LANGS
     */
    intercept(this, 'currentLanguage', change => {
      if (!change.newValue) {
        // Don't allow for language to be set to a false-y value
        return null;
      }

      if (WHITELIST_LANGS.indexOf(change.newValue) < 0) {
        throw new Error(
          'Attempted to set language to an unsupported language code:',
          change.newValue
        );
      }

      return change;
    });

    /**
     * Reactions to changes to store values
     */
    // Update i18n with the current language
    reaction(() => this.currentLanguage, lang => i18n.changeLanguage(lang));
  }
}

export default UIStore;
