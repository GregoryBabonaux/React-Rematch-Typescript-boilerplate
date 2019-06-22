import { createModel } from '@rematch/core';
import { push } from 'connected-react-router';

export type SheepState = {
  id: Number,
  name: String,
}

export type SheepsState = {
  sheeps: Array<SheepState>,
};

const INITIAL_STATE : SheepsState = {
  sheeps: [],
}

export const sheep = createModel({
  state: INITIAL_STATE, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      console.log(state, payload)
      return state + payload
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async getSheeps(payload: number, rootState) {

    },
  })
})