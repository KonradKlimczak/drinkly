import { prettyDOM, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CreateAccount } from './CreateAccount';

test('renders Create Account page', () => {
  render(
    <Router>
      <CreateAccount />
    </Router>
  );

  const firstNameElement = screen.getByTestId('first-name');
  expect(firstNameElement).toBeInTheDocument();
  const firstNameInput = firstNameElement.getElementsByTagName('input').item(0);
  expect(firstNameInput).toHaveAttribute('name', 'firstName');
  expect(firstNameInput).toBeInTheDocument();

  const lastNameElement = screen.getByTestId('last-name');
  expect(lastNameElement).toBeInTheDocument();
  const lastNameInput = lastNameElement.getElementsByTagName('input').item(0);
  expect(lastNameInput).toHaveAttribute('name', 'lastName');
  expect(lastNameInput).toBeInTheDocument();

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
