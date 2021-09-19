import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cocktail, CocktailQuery } from 'types';

export type CocktailState = {
  query: CocktailQuery;
  cocktails?: Cocktail[];
};

const initialState: CocktailState = {
  query: { name: '', ingredients: [], sortType: 'MOST_POPULAR' },
  cocktails: undefined,
};

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    setCocktails: (state, action: PayloadAction<Cocktail[]>) => {
      state.cocktails = action.payload;
    },
    setQuery: (state, action: PayloadAction<CocktailQuery>) => {
      state.query = action.payload;
    },
  },
});

export const { setCocktails, setQuery } = cocktailSlice.actions;

export const { reducer: cocktailReducer } = cocktailSlice;
