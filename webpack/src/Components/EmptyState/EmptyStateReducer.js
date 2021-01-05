// This is an example for a generic redux's reducer
// Reducers should be registered to foreman-core
// For a further registration demonstration, have a look in `webpack/global_index.js` 

import Immutable from 'seamless-immutable';
import { GENERAL_ACTION_TYPE } from './Constants';

const initialState = Immutable({});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case GENERAL_ACTION_TYPE:
      return state.set('generalProprty', payload);
    default:
      return state;
  }
};
