
import { init, RematchRootState,   Models,
  ModelConfig,
  ModelEffects } from '@rematch/core'
import createRematchPersist from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import selectPlugin from '@rematch/select';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from "connected-react-router";

import * as models from './models'
import Reactotron from "ReactotronConfig";

console.log(Reactotron)

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
  redux: {
    reducers,
    middlewares: [routerMiddleware(history)],
    createStore,
    // @ts-ignore
    enhancers: [Reactotron.createEnhancer()]
  },
  models,
  plugins: [persistPlugin, loading, selectPlugin()]
});


export type ExtractRematchLoadingFromEffects<
  effects extends ModelConfig["effects"]
> = effects extends ((...args: any[]) => infer R)
  ? R extends ModelEffects<any>
    ? ExtractRematchLoadingFromEffectsObject<R>
    : {}
  : effects extends ModelEffects<any>
  ? ExtractRematchLoadingFromEffectsObject<effects>
  : {};

export type ExtractRematchLoadingFromEffectsObject<
  effects extends ModelEffects<any>
> = { [effectKey in keyof effects]: boolean };

interface LoadingState<M extends Models> {
  loading: {
    global: boolean;
    models: { [k in keyof M]: boolean };
    effects: {
      [k in keyof M]: ExtractRematchLoadingFromEffects<M[k]["effects"]>
    };
  };
}

export type Store = typeof store
export type Dispatch = typeof store.dispatch
export type iRootState = RematchRootState<typeof models>