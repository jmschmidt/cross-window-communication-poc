import React from 'react';
import { shallow } from 'enzyme';
import { App } from '.';
jest.mock('components/hoc/observeRootStore');

const rootStoreMock = {
  uiStore: {},
  appStore: {},
}

it('renders without crashing', () => {
  shallow(<App t={jest.fn()} rootStore={rootStoreMock} />);
});
