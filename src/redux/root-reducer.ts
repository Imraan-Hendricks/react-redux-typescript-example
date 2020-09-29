import { combineReducers } from 'redux';
import { modulesReducer } from '../modules/modules-reducer';

export const rootReducer = combineReducers({
  modules: modulesReducer,
});
