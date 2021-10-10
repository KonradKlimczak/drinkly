import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { cocktailDetailsApi } from 'services/cocktail';

import { watcherSaga } from './sagas';
import { cocktailReducer } from './slices/cocktailSlice';
import { userReducer } from './slices/userSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
    [cocktailDetailsApi.reducerPath]: cocktailDetailsApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cocktailDetailsApi.middleware, sagaMiddleware),
});
sagaMiddleware.run(watcherSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
