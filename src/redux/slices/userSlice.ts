import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types';

export type UserState = {
  user:
    | {
        isLogged: false;
      }
    | ({
        isLogged: true;
      } & User);
};

const initialState: UserState = {
  user: { isLogged: false },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = {
        isLogged: true,
        ...action.payload,
      };
    },
    logout: (state) => {
      state.user = {
        isLogged: false,
      };
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
