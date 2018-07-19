import { inject, observer } from 'mobx-react';

/**
 * A HOC to simplify injecting rootStore into components
 * @param {*} component - A React component
 * @returns {*} - the wrapped React component
 */
const observeRootStore = (component) => inject('rootStore')(observer(component));

export default observeRootStore;
