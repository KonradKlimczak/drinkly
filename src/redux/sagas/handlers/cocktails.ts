import { call, put } from 'redux-saga/effects';
import { Cocktail } from 'types';
import { setCocktails } from '../../slices/cocktailSlice';
import { GetCocktailAction } from '../actions/cocktail';
import { requestGetCocktails } from '../requests/cocktail';

export function* handleGetCocktails(action: GetCocktailAction) {
  try {
    const response: { data: Cocktail[] } = yield call(requestGetCocktails, action.query);
    const { data } = response;
    yield put(setCocktails(data));
  } catch (error) {
    console.log(error);
  }
}
