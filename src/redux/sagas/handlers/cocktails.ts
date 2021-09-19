import { call, put } from 'redux-saga/effects';
import { Cocktail } from 'types';
import { setCocktails } from '../../slices/cocktailSlice';
import { requestGetCocktails } from '../requests/cocktail';

export function* handleGetCocktails() {
  try {
    const response: { data: Cocktail[] } = yield call(requestGetCocktails);
    const { data } = response;
    yield put(setCocktails(data));
  } catch (error) {
    console.log(error);
  }
}
