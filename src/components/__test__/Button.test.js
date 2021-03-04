import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

test('renders learn react link', () => {
  render(
    <Button name="+" wide={false} color clickHandler={() => true} />,
  );
  const linkElement = screen.getByText(/\+/i);
  expect(linkElement).toBeInTheDocument();
});

it('should render button correct', () => {
  const button = renderer.create(
    <Button name="+" wide={false} color clickHandler={() => true} />,
  ).toJSON();
  expect(button).toMatchSnapshot();
});

it('shoud make the width 50% if the wide attribut is true', () => {
  const button = renderer.create(
    <Button name="0" wide color={false} clickHandler={() => true} />,
  ).toJSON();
  expect(button).toMatchSnapshot();
});

it('should make the color of button white if the color is false', ()=>{
  const button = renderer.create(
    <Button name="AC" wide={false} color={false} clickHandler={() => true} />,
  ).toJSON();
  expect(button).toMatchSnapshot();
});