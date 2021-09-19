import { configureStore } from '@reduxjs/toolkit';
import { cocktailReducer } from './slices/cocktailSlice';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
