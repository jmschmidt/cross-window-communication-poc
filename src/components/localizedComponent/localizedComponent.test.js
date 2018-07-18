import React from 'react';
import { shallow } from 'enzyme';

import LocalizedComponent from '.';
import i18n from 'i18n.js';
// Will override the above import with the mock file in src/__mocks__/
jest.mock('i18n.js');

/**
 * Jest v20 doesn't support console.debug(). This can be removed once CRA is updated to the next
 * version after 1.1.4. According to the `next` branch on Github, this will upgrade Jest to v22,
 * which should support console.debug
 */
console.debug = jest.fn();

class FooComponentNamespace extends LocalizedComponent {
  static namespace = 'foo';
  render() {
    return <div>foo</div>;
  }
}

class FooComponentNoNamespace extends LocalizedComponent {
  render() {
    return <div>foo</div>
  }
}

/**
 * Tests
 */
beforeEach(() => {
  i18n.removeResourceBundle.mockClear();
});

it('should remove translation resources if `namespace` class variable is defined', () => {
  // Quickly mount and then unmount the component
  shallow(<FooComponentNamespace />).unmount();

  expect(i18n.removeResourceBundle).toHaveBeenCalled();
});

it('should call removeResourceBundle with current language and component\'s namespace', () => {
  // Pretend this language was selected
  i18n.language = 'en';

  shallow(<FooComponentNamespace />).unmount();

  expect(i18n.removeResourceBundle.mock.calls[0][0]).toEqual('en');
  expect(i18n.removeResourceBundle.mock.calls[0][1]).toEqual(FooComponentNamespace.namespace);
});

it(
  'should not try to remove translation resources if no `namespace` class variable is defined',
  () => {
    shallow(<FooComponentNoNamespace />).unmount();

    expect(i18n.removeResourceBundle).not.toHaveBeenCalled();
  }
);
