import { FC } from 'react';
import { _AppState as _AppStateImport } from '../../redux/root-interface';
import { ADD_NOTE, REMOVE_NOTE, RESET, RESET_APP } from './redux/notes-types';

//-----------
// Shared
//-----------

interface _AddNoteAction {
  type: typeof ADD_NOTE;
  payload: string[];
}

interface _RemoveNoteAction {
  type: typeof REMOVE_NOTE;
  payload: string[];
}

interface _ResetAction {
  type: typeof RESET;
}

interface _ResetAppAction {
  type: typeof RESET_APP;
}

//-----------
// Reducer
//-----------

export interface _NotesState {
  notes: string[];
}

export type _Action =
  | _AddNoteAction
  | _RemoveNoteAction
  | _ResetAction
  | _ResetAppAction;

//-----------
// Actions
//-----------

export interface _AddNote {
  (note: string, notes: string[]): _AddNoteAction;
}

export interface _RemoveNote {
  (notesIndex: number, notes: string[]): _RemoveNoteAction;
}

export interface _Reset {
  (): _ResetAction;
}

//-----------
// Hook
//-----------

export type _AppState = _AppStateImport;

export interface _addNote {
  (note: string): void;
}

export interface _removeNote {
  (notesIndex: number): void;
}

export interface _reset {
  (): void;
}

export interface _useNote {
  (): {
    notes: string[];
    addNote: _addNote;
    removeNote: _removeNote;
    reset: _reset;
  };
}

//-----------
// Component
//-----------

interface _NotesProps {}

export type _Notes = FC<_NotesProps>;
