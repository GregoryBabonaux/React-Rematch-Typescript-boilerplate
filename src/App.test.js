import React from 'react'
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { store } from 'store';

import App from './App';

afterEach(cleanup)

// Render our App component with Redux & Router, so we can test both
function renderWithReduxAndRouter(ui) {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  return {
    ...render(<Provider store={store}><Router history={history}>{ui}</Router></Provider>),
    store,
    history,
  }
}

// testing Home content
// Note we are mounting a connected component 
test('can render <App /> and increment counter in <Home />', () => {
  const { getByTestId } = renderWithReduxAndRouter(<App />)
  fireEvent.click(getByTestId('counter-increment'))
  expect(getByTestId('counter-increment').textContent).toBe('1')
  fireEvent.click(getByTestId('counter-increment'))
  fireEvent.click(getByTestId('counter-increment'))
  fireEvent.click(getByTestId('counter-increment'))
  expect(getByTestId('counter-increment').textContent).toBe('4')
});

// testing navigation 
test('can render <App /> and use navigation Links', () => {
  const { container, getByText } = renderWithReduxAndRouter(<App />);
  expect(container.innerHTML).toMatch('Bienvenue')
  const leftClick = { button: 0 }
  fireEvent.click(getByText(/sheeps/i), leftClick)
  expect(container.innerHTML).toMatch('Sheeps')
});
