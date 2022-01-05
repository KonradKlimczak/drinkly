export type User = {
  id: string;
  username: string;
  lastName: string;
  email: string;
};

export type Comment = {
  id: string;
  text: string;
  createDateTime: string;
  updateDateTime?: string;
  author: {
    id: string;
    username: string;
  };
};

export type Ingredient = {
  id: string;
  name: string;
  amount?: number | string;
  optional?: boolean;
  unit?: string;
};

export type RecipeStep = {
  id: string;
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
  author: {
    id: string;
    username: string;
  };
};

export type CocktailInput = {
  id: string;
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
