import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '../Button';

test('renders learn react link', () => {
  render(<Button name="+" wide={false} color clickHandler={() => true} />);
  const linkElement = screen.getByText(/\+/i);
  expect(linkElement).toBeInTheDocument();
});
