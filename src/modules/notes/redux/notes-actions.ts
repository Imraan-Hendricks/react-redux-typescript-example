import { ADD_NOTE, REMOVE_NOTE, RESET } from './notes-types';
import { _AddNote, _RemoveNote, _Reset } from '../notes-interface';

export const AddNote: _AddNote = (note, notes) => ({
  type: ADD_NOTE,
  payload: [...notes, note],
});

export const RemoveNote: _RemoveNote = (noteIndex, notes) => ({
  type: REMOVE_NOTE,
  payload: notes.filter((note, index) => noteIndex !== index),
});

export const Reset: _Reset = () => ({
  type: RESET,
});
