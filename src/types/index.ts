export type Cocktail = {
  id: string;
  name: string;
  rating: number;
  image: string;
  ingredients: string[];
};

export type SortType = 'MOST_POPULAR' | 'HIGHEST_RATING' | 'LOWEST_RATING';

export type CocktailQuery = {
  name: string;
  sortType: SortType;
  ingredients: string[];
};
