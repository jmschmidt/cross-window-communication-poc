import React from 'react';
import { shallow } from 'enzyme';
import { render } from 'react-testing-library';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome to React')).toBeInTheDOM();
});
