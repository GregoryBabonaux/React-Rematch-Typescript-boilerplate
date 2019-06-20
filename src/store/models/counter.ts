import { createModel } from '@rematch/core';
import { push } from 'connected-react-router';

export type CounterState = number;

export const counter = createModel({
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    // increment: (state: CounterState, payload: number): CounterState => state + payload
    increment(state, payload) {
      console.log(state, payload)
      return state + payload
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: number, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.counter.increment(payload)
    },
    testingPurpose(state) {
      console.log(state)
      dispatch(push('/about'));
    }
  })
})