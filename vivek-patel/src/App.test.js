import { render, screen } from '@testing-library/react';
import App from './App';

test('displays Vivek Patel on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Vivek Patel/i);
  expect(nameElement).toBeInTheDocument();
});