import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Enable Enzyme's Jest integrations
import 'jest-enzyme';
// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';
// This adds jest-dom's custom assertions
import 'jest-dom/extend-expect';

configure({ adapter: new Adapter() });

/**
 * Jest v20 doesn't support console.debug(). This can be removed once CRA is updated to the next
 * version after 1.1.4. According to the `next` branch on Github, this will upgrade Jest to v22,
 * which should support console.debug
 */
console.debug = jest.fn();
