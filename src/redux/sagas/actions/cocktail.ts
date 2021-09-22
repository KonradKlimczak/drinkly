import { CocktailQuery } from 'types';

export const GET_COCKTAILS = 'GET_COCKTAILS';

export const getCocktails = (query: CocktailQuery) => ({
  type: GET_COCKTAILS,
  query,
});

export type GetCocktailAction = ReturnType<typeof getCocktails>;
