import { ChangeEvent, FC } from 'react';

//-----------
// Component
//-----------

interface _NotesInputProps {
  addNote(note: string): void;
}

export type _NotesInput = FC<_NotesInputProps>;

export interface _updateNote {
  (event: ChangeEvent<HTMLInputElement>): void;
}
