import React from 'react';
import renderer from 'react-test-renderer';
import {
  BrowserRouter,
} from 'react-router-dom';
import App from '../Routes';
import Quote from '../Quote';
import Calculator from '../Calculator';

it('should render the home page of math magicien correctly', () => {
  const home = renderer.create(
    <App />,
  ).toJSON();
  expect(home).toMatchSnapshot();
});

it('should render Quotes page', () => {
  const quote = renderer.create(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>,
  ).toJSON();
  expect(quote).toMatchSnapshot();
});

it('should render Calculator page', () => {
  const calculator = renderer.create(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  ).toJSON();
  expect(calculator).toMatchSnapshot();
});
