export type Ingredient = {
  name: string;
  amount: number | string;
  unit?: 'ml' | 'drops';
};

export type RecipeStep = {
  action: string;
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

export type CocktailInput = {
  name: string;
  image?: string;
  recipe: RecipeStep[];
};

export type SortType = 'MOST_POPULAR' | 'HIGHEST_RATING' | 'LOWEST_RATING';

export type CocktailQuery = {
  name: string;
  sortType: SortType;
  ingredients: string[];
};

export type User = {
  username: string;
  lastName: string;
  email: string;
};
