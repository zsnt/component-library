import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { NumberPicker } from '../build';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.step;

    case 'DECREMENT':
      return state - action.step;

    case 'UPDATE_AMOUNT':
      return action.value;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  amount: counterReducer
});

const store = createStore(rootReducer);

storiesOf('NumberPicker', module)
  .add(
    'Default',
    withInfo()(() => (
      <Provider store={store}>
        <NumberPicker
          step={1}
        />
      </Provider>
    ))
  )
  .add(
    'With text label',
    withInfo()(() => (
      <Provider store={store}>
        <NumberPicker
          step={1}
          label="Einkauf"
        />
      </Provider>
    ))
  )
  .add(
    'With text label & currency symbol',
    withInfo()(() => (
      <Provider store={store}>
        <NumberPicker
          step={2}
          label="Einkauf"
          currencySymbol="€"
          min={-10}
          max={10}
          precision={2}
        />
      </Provider>
    ))
  )
  .add(
    'With text label, currency symbol & custom steps',
    withInfo()(() => (
      <Provider store={store}>
        <NumberPicker
          step={0.01}
          label="Verkauf"
          currencySymbol="€"
          min={-10}
          max={10}
          precision={2}
        />
      </Provider>
    ))
  );
