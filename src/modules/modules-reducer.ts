import { combineReducers } from 'redux';
import { notesReducer } from './notes/redux/notes-reducer';

export const modulesReducer = combineReducers({
  notes: notesReducer,
});
