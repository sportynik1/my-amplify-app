import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	  render(<App />);
	  const linkElement = screen.getByText(/learn react/i);
	  expect(linkElement).toBeInTheDocument();
});

// Additional sample test case
test('renders hello world text', () => {
	render(<App />);
const textElement = screen.getByText(/hello world/i);
expect(textElement).toBeInTheDocument(); });

