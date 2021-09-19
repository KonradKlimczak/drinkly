import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from './Login';

test('renders Create Account page', () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  const emailElement = screen.getByTestId('email');
  expect(emailElement).toBeInTheDocument();
  const emailInput = emailElement.getElementsByTagName('input').item(0);
  expect(emailInput).toHaveAttribute('name', 'email');
  expect(emailInput).toBeInTheDocument();

  const passwordElement = screen.getByTestId('password');
  expect(passwordElement).toBeInTheDocument();
  const passwordInput = passwordElement.getElementsByTagName('input').item(0);
  expect(passwordInput).toHaveAttribute('name', 'password');
  expect(passwordInput).toBeInTheDocument();
});
