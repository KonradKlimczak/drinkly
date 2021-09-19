import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'redux/store';
import { ApplicationBar } from './ApplicationBar';

test('renders Application Bar with icon, header and buttons', () => {
  render(
    <Provider store={store}>
      <Router>
        <ApplicationBar />
      </Router>
    </Provider>
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
