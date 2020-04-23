import Immutable from 'seamless-immutable';
import { ADD_CONTENT } from './Constants';

const initialState = Immutable({});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case ADD_CONTENT:
      return state.set('header', payload);
    default:
      return state;
  }
};
