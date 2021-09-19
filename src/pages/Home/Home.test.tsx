import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { Home } from './Home';

test('renders Cocktail Card with', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const cocktailNameInput = screen.getByTestId('cocktail-name-input');
  expect(cocktailNameInput).toHaveTextContent('Cocktail name');
  expect(cocktailNameInput).toBeInTheDocument();

  const searchByIngredientsInput = screen.getByTestId('search-by-ingredients');
  expect(searchByIngredientsInput).toHaveTextContent('Search By Ingredients');
  expect(searchByIngredientsInput).toBeInTheDocument();

  const sortSelectElement = screen.getByTestId('sort-cocktails');
  expect(sortSelectElement).toBeInTheDocument();
});
