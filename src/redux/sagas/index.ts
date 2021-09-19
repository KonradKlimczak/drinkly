import { takeLatest } from 'redux-saga/effects';
import { GET_COCKTAILS } from './actions/cocktail';
import { handleGetCocktails } from './handlers/cocktails';

export function* watcherSaga() {
  yield takeLatest(GET_COCKTAILS, handleGetCocktails);
}
