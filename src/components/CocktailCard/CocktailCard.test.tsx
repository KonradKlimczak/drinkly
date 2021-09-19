import { render, screen } from '@testing-library/react';
import { Cocktail } from 'types';
import { CocktailCard } from './CocktailCard';

const COCKTAIL: Cocktail = {
  id: '1',
  name: 'Whiskey Sour',
  rating: 4.9,
  image: 'https://source.unsplash.com/random',
  ingredients: [
    '2 oz or 60 ml of Rye',
    '.5 oz or 15 ml of Simple Syrup',
    '.75 oz or 22 ml of Lemon Juice',
    'Egg White',
    '4 Drops Bitters',
  ],
};

test('renders Cocktail Card with', () => {
  render(<CocktailCard cocktail={COCKTAIL} />);

  const imageElement = screen.getByAltText('Whiskey Sour');
  expect(imageElement.tagName).toBe('IMG');
  expect(imageElement).toBeInTheDocument();

  const nameElement = screen.getByText('Whiskey Sour');
  expect(nameElement).toBeInTheDocument();

  const ratingElement = screen.getByTestId('cocktail-rating');
  expect(ratingElement).toBeInTheDocument();
  expect(ratingElement).toHaveAttribute('aria-label', '4.9 Stars');
});
