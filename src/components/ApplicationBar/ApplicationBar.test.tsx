import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApplicationBar } from './ApplicationBar';

test('renders Application Bar with icon, header and buttons', () => {
  render(
    <Router>
      <ApplicationBar />
    </Router>
  );

  const iconElement = screen.getByTestId('LocalBarIcon');
  expect(iconElement).toBeInTheDocument();

  const headerElement = screen.getByText(/Drinkly/i);
  expect(headerElement).toBeInTheDocument();

  const loginElement = screen.getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();

  const createAccountElement = screen.getByText(/Create new account/i);
  expect(createAccountElement).toBeInTheDocument();
});
