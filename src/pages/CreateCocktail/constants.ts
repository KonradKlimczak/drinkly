import { v4 as uuidv4 } from 'uuid';

import { CocktailInput } from 'types';

export const INITIAL_COCKTAIL: CocktailInput = {
  id: uuidv4(),
  name: '',
  recipe: [
    {
      id: uuidv4(),
      action: 'shake',
      ingredients: [],
    },
  ],
};
