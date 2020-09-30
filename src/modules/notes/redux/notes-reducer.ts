import { ADD_NOTE, REMOVE_NOTE, RESET, RESET_APP } from './notes-types';
import { persist } from './notes-persist';
import { _Action, _NotesState } from '../notes-interface';

export const initialState = {
  notes: [],
};

export const notesReducer = persist(
  (state: _NotesState = initialState, action: _Action) => {
    switch (action.type) {
      case ADD_NOTE:
        return { ...state, notes: action.payload };
      case REMOVE_NOTE:
        return { ...state, notes: action.payload };
      case RESET:
      case RESET_APP:
        return initialState;
      default:
        return state;
    }
  }
);
