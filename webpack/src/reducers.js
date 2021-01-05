import { combineReducers } from 'redux';
import EmptyStateReducer from './Components/EmptyState/EmptyStateReducer';

const reducers = {
  foremanPluginTemplate: combineReducers({
    emptyState: EmptyStateReducer,
  }),
};

export default reducers;
