import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const element = screen.getByText(/task list app/i);
  expect(element).toBeInTheDocument();
});
