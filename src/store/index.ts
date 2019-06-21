import { init, RematchRootState } from '@rematch/core'
import createRematchPersist from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import selectPlugin from '@rematch/select';

import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from "connected-react-router";

import * as models from './models'

// Connected React Router config
// https://codesandbox.io/s/72o3k1z3nq
export const history = createBrowserHistory();
const reducers = { router: connectRouter(history) };

// Persist config
const persistPlugin = createRematchPersist({
  // whitelist: ['counter'], // whitelist whatever you want
  throttle: 5000,
  version: 1,
});

// Loading config
const options = {}
const loading = createLoadingPlugin(options)

export const store = init({
  models,
  redux: {
    reducers,
    middlewares: [routerMiddleware(history)],
  },
  plugins: [persistPlugin, loading, selectPlugin()]
});

export type Store = typeof store
export type Dispatch = typeof store.dispatch
export type iRootState = RematchRootState<typeof models>