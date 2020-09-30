import React, { useState } from 'react';
import { _NotesInput, _updateNote } from './notes-input-interface';

export const NotesInput: _NotesInput = ({ addNote }) => {
  const [note, setNote] = useState('');

  const updateNote: _updateNote = (event) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote('');
  };

  return (
    <div>
      <input
        onChange={updateNote}
        type='text'
        name='note'
        placeholder='note'
        value={note}
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};
