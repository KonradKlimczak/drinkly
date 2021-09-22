export type Ingredient = {
  name: string;
  amount: number;
  unit?: 'ml' | 'drops';
};

export type RecipeStep = {
  action: 'shake' | 'garnish';
  ingredients: Ingredient[];
};

export type Cocktail = {
  id: string;
  name: string;
  rating: number;
  image: string;
  recipe: RecipeStep[];
  views: number;
};

export type SortType = 'MOST_POPULAR' | 'HIGHEST_RATING' | 'LOWEST_RATING';

export type CocktailQuery = {
  name: string;
  sortType: SortType;
  ingredients: string[];
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
};
