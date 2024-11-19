// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event'; // For simulating user interactions

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterValue = screen.getByText(/0/i);
  expect(counterValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText(/\+/i);
  fireEvent.click(incrementButton);
  const counterValue = screen.getByText(/1/i);
  expect(counterValue).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText(/-/i);
  const incrementButton = screen.getByText(/\+/i);
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);
  const counterValue = screen.getByText(/0/i);
  expect(counterValue).toBeInTheDocument();
});
