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
