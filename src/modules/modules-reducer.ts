import { combineReducers } from 'redux';
import { asyncReqReducer } from './async-req/redux/async-req-reducer';
import { notesReducer } from './notes/redux/notes-reducer';

export const modulesReducer = combineReducers({
  asyncReq: asyncReqReducer,
  notes: notesReducer,
});
