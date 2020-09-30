import { useSelector, useDispatch } from 'react-redux';
import { AddNote, RemoveNote, Reset } from './notes-actions';
import {
  _AppState,
  _NotesState,
  _addNote,
  _removeNote,
  _reset,
  _useNote,
} from '../notes-interface';

export const useNote: _useNote = () => {
  const notes = useSelector<_AppState, _NotesState['notes']>(
    (state) => state.modules.notes.notes
  );

  const dispatch = useDispatch();

  const addNote: _addNote = (note) => {
    dispatch(AddNote(note, notes));
  };

  const removeNote: _removeNote = (notesIndex) => {
    dispatch(RemoveNote(notesIndex, notes));
  };

  const reset: _reset = () => {
    dispatch(Reset());
  };

  return { notes, addNote, removeNote, reset };
};
