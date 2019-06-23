import { createModel } from '@rematch/core';
import { push } from 'connected-react-router';

import { getSheeps } from 'library/api';

export type SheepType = {
  id: Number,
  name: String,
  color: String,
}

export type SheepsState = {
  sheeps: Array<SheepType>,
};

const INITIAL_STATE : SheepsState = {
  sheeps: [],
}

export const sheep = createModel({
  state: INITIAL_STATE, // initial state
  reducers: {
    // handle state changes with pure functions
    setSheeps(state, payload) {
      return {
        ...state,
        sheeps: payload
      }
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async getSheeps(payload: number, rootState) {
      const sheeps = await getSheeps();
      dispatch.sheep.setSheeps(sheeps);
    },
  })
})