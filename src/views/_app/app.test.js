import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'react-testing-library';
import { App } from '.';
jest.mock('components/header');

it('renders without crashing', () => {
  shallow(<App t={jest.fn()}/>);
});
