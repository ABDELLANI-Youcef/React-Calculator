import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../Calculator';

it('should make addition correctly', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('1'), leftClick);
  userEvent.click(screen.getByTestId('+'), leftClick);
  userEvent.click(screen.getByTestId('1'), leftClick);
  userEvent.click(screen.getByTestId('='), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('2');
});

it('should make substraction correctly', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('1'), leftClick);
  userEvent.click(screen.getByTestId('-'), leftClick);
  userEvent.click(screen.getByTestId('1'), leftClick);
  userEvent.click(screen.getByTestId('='), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('0');
});

it('should make Multiplication correctly', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('2'), leftClick);
  userEvent.click(screen.getByTestId('X'), leftClick);
  userEvent.click(screen.getByTestId('5'), leftClick);
  userEvent.click(screen.getByTestId('='), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('10');
});

it('should make division correctly', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('2'), leftClick);
  userEvent.click(screen.getByTestId('÷'), leftClick);
  userEvent.click(screen.getByTestId('5'), leftClick);
  userEvent.click(screen.getByTestId('='), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('0.4');
});

it('should make division by negative correctly', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('2'), leftClick);
  userEvent.click(screen.getByTestId('÷'), leftClick);
  userEvent.click(screen.getByTestId('-'), leftClick);
  userEvent.click(screen.getByTestId('5'), leftClick);
  userEvent.click(screen.getByTestId('='), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('-0.4');
});

it('should make percentage correctly', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('2'), leftClick);
  userEvent.click(screen.getByTestId('%'), leftClick);
  userEvent.click(screen.getByTestId('5'), leftClick);
  userEvent.click(screen.getByTestId('='), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('0.1');
});

it('should print warning when dividing by 0', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('2'), leftClick);
  userEvent.click(screen.getByTestId('÷'), leftClick);
  userEvent.click(screen.getByTestId('0'), leftClick);
  userEvent.click(screen.getByTestId('='), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('ERROR, DIVISION BY ZERO');
});

it('should print -1 when typing -1=', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('-'), leftClick);
  userEvent.click(screen.getByTestId('1'), leftClick);
  userEvent.click(screen.getByTestId('='), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('-1');
});

it('should print 1 when typing 1=', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('1'), leftClick);
  userEvent.click(screen.getByTestId('='), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('1');
});

it('should reinitialize the result to 0', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('1'), leftClick);
  userEvent.click(screen.getByTestId('AC'), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('0');
});

it('should invert the sign of the result', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('1'), leftClick);
  userEvent.click(screen.getByTestId('+/-'), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('-1');
});

it('should multiply float number correctly', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('0'), leftClick);
  userEvent.click(screen.getByTestId('.'), leftClick);
  userEvent.click(screen.getByTestId('5'), leftClick);
  userEvent.click(screen.getByTestId('X'), leftClick);
  userEvent.click(screen.getByTestId('0'), leftClick);
  userEvent.click(screen.getByTestId('.'), leftClick);
  userEvent.click(screen.getByTestId('1'), leftClick);
  userEvent.click(screen.getByTestId('='), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('0.05');
});

it('should print the second the operator correctly', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('0'), leftClick);
  userEvent.click(screen.getByTestId('.'), leftClick);
  userEvent.click(screen.getByTestId('5'), leftClick);
  userEvent.click(screen.getByTestId('X'), leftClick);
  userEvent.click(screen.getByTestId('0'), leftClick);
  userEvent.click(screen.getByTestId('.'), leftClick);
  userEvent.click(screen.getByTestId('1'), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('0.1');
});

it('should print the second the operator correctly', () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>,
  );
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('0'), leftClick);
  userEvent.click(screen.getByTestId('.'), leftClick);
  userEvent.click(screen.getByTestId('5'), leftClick);
  userEvent.click(screen.getByTestId('X'), leftClick);
  userEvent.click(screen.getByTestId('0'), leftClick);
  userEvent.click(screen.getByTestId('.'), leftClick);
  userEvent.click(screen.getByTestId('1'), leftClick);
  userEvent.click(screen.getByTestId('+'), leftClick);
  userEvent.click(screen.getByTestId('0'), leftClick);
  userEvent.click(screen.getByTestId('.'), leftClick);
  userEvent.click(screen.getByTestId('1'), leftClick);
  userEvent.click(screen.getByTestId('='), leftClick);
  expect(screen.getByTestId('display').textContent).toEqual('0.15');
});
