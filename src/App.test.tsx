import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Southern Code Challenge title', () => {
  render(<App />);
  const linkElement = screen.getByText(/southern code challenge/i);
  expect(linkElement).toBeInTheDocument();
});
