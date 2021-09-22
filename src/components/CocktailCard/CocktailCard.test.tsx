import { render, screen } from '@testing-library/react';
import { Cocktail } from 'types';
import { CocktailCard } from './CocktailCard';

const COCKTAIL: Cocktail = {
  id: 'w1',
  name: 'Whiskey Sour',
  rating: 4.9,
  image: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Whiskey_Sour.jpg',
  recipe: [
    {
      action: 'shake',
      ingredients: [
        {
          name: 'Whiskey Rye',
          amount: 60,
          unit: 'ml',
        },
        {
          name: 'Simple Syrup',
          amount: 15,
          unit: 'ml',
        },
        {
          name: 'Lemon Juice',
          amount: 22,
          unit: 'ml',
        },
        {
          name: 'Egg white',
          amount: 1,
        },
      ],
    },
    {
      action: 'shake',
      ingredients: [
        {
          name: 'Ice cubes',
          amount: 4,
        },
      ],
    },
    {
      action: 'garnish',
      ingredients: [
        {
          name: 'Angostura Bitters',
          amount: 4,
          unit: 'drops',
        },
      ],
    },
  ],
  views: 223,
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
