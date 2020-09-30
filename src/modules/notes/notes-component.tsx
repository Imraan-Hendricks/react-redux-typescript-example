import React from 'react';
import { useNote } from './redux/notes-redux';
import { NotesInput } from './notes-input/notes-input-component';
import { _Notes } from './notes-interface';

export const Notes: _Notes = () => {
  const { notes, addNote, removeNote, reset } = useNote();

  return (
    <div>
      <NotesInput addNote={addNote} />
      <hr />
      <ul>
        {notes.map((note, i) => (
          <li key={note} onClick={() => removeNote(i)}>
            {note}
          </li>
        ))}
      </ul>
      <button onClick={reset}>reset</button>
    </div>
  );
};
