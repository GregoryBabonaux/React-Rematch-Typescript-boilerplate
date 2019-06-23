import { createModel } from '@rematch/core';
import { push } from 'connected-react-router';

export type UserType = {
  id: Number,
  firstname: String,
  lastname: String,
}

export type AuthState = {
  user: UserType | null,
  token: string | null,
  refreshToken: string | null,
};

const INITIAL_STATE : AuthState = {
  user: null,
  token: null,
  refreshToken: null
}

export const auth = createModel({
  state: INITIAL_STATE, // initial state
  reducers: {
  },
  effects: (dispatch) => ({
  })
})