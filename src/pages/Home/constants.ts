import { v4 as uuid } from 'uuid';
import { Cocktail } from 'types';

export const COCKTAILS_MOCK: Cocktail[] = [
  {
    id: uuid(),
    name: 'Whiskey Sour',
    rating: 4.9,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/59/Whiskey_Sour.jpg',
    ingredients: [
      '2 oz or 60 ml of Rye',
      '.5 oz or 15 ml of Simple Syrup',
      '.75 oz or 22 ml of Lemon Juice',
      'Egg White',
      '4 Drops Bitters',
    ],
  },
  {
    id: uuid(),
    name: 'Tom Collins',
    rating: 4.2,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/Tom_Collins_in_Copenhagen.jpg',
    ingredients: [
      '2 oz. -or- 60 ml. of Gin',
      '1 oz. -or- 30 ml. of Lemon Juice',
      '.25 oz. -or- 8 ml. of Simple Syrup',
      'Shake & Pour',
      'Top with Seltzer',
    ],
  },
  {
    id: uuid(),
    name: 'Piña Colada',
    rating: 4.5,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Pi%C3%B1a_Colada.jpg',
    ingredients: [
      '16 oz. -or- 450 ml. of Ice',
      '1.5 oz. -or- 45 ml. Creme of Coconut',
      '1.5 oz. -or- 45 ml. Pineapple Juice',
      '8 oz. Fresh Pineapple Chunk',
      '1.5 oz. -or- 45 ml. Rum',
      "Blend till frappe'd",
      'Serve and garnish',
      'Melt into a sunset',
    ],
  },
];
