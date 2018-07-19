import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'react-testing-library';
import { App } from '.';

const rootStoreMock = {
  uiStore: {},
  appStore: {},
}

it('renders without crashing', () => {
  shallow(<App t={jest.fn()} rootStore={rootStoreMock} />);
});
