import { init, RematchRootState } from '@rematch/core'
import { createBrowserHistory } from 'history'

import { connectRouter, routerMiddleware } from "connected-react-router";

import * as models from './models'

// https://codesandbox.io/s/72o3k1z3nq
export const history = createBrowserHistory();
const reducers = { router: connectRouter(history) };

export const store = init({
  models,
  redux: {
    reducers,
    middlewares: [routerMiddleware(history)],
  }
});

export type Store = typeof store
export type Dispatch = typeof store.dispatch
export type iRootState = RematchRootState<typeof models>