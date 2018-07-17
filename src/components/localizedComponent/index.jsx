import { Component } from 'react';

import i18n from 'i18n.js';


/**
 * This component helps unload localizations when the component is unmounted. This is to address
 * instances in which a component was viewed, unmounted, and then the language was changed. If the
 * namespaced resource bundle remained registered in i18next, translation assets for the new
 * language would be requested even when the component is no longer visible.
 *
 * After creating a component that extends this class, specify a `namespace` static class variable:
 *
 *
 * class FooComponent extends LocalizedComponent {
 *   static namespace = 'foo';
 *
 *   render() {
 *      return (...);
 *   }
 * }
 * export default translate(FooComponent.namespace)(FooComponent);
 *
 *
 * When componentWillUnmount() is called it will detect the namespace and unregister its
 * translations.
 */
class LocalizedComponent extends Component {
  componentWillUnmount() {
    if (this.constructor.namespace) {
      console.debug(`unloading namespace ${this.constructor.namespace} for language ${i18n.language}`);
      i18n.removeResourceBundle(i18n.language, this.constructor.namespace);
    }
  }
}

export default LocalizedComponent;
