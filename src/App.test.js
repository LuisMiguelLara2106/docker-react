import { render, screen } from '@testing-library/react';
import App from './App';

test('renders I was changed link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I was changed/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders I was changed link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I was changed/i);
  expect(linkElement).toBeInTheDocument();
});
