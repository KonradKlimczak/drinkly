import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cocktail } from 'types';

export interface CocktailState {
  cocktails?: Cocktail[];
}

const initialState: CocktailState = {
  cocktails: undefined,
};

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    setCocktails: (state, action: PayloadAction<Cocktail[]>) => {
      state.cocktails = action.payload;
    },
  },
});

export const { setCocktails } = cocktailSlice.actions;

export const { reducer: cocktailReducer } = cocktailSlice;
