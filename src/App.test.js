import React from 'react'
import { Provider } from 'react-redux'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { store } from 'store';

import App from './App';

afterEach(cleanup)

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
function renderWithRedux(ui) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

test('can increment counter in <Home />', () => {
  const { getByTestId } = renderWithRedux(<App />)
  fireEvent.click(getByTestId('counter-increment'))
  expect(getByTestId('counter-increment').textContent).toBe('1')
})








// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App store={{}}/>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
