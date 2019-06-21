import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { getPersistor } from '@rematch/persist'
import { PersistGate } from "redux-persist/integration/react";

// local
import { store, history } from './store'

// local
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const persistor = getPersistor()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
