import React from 'react';
import { Note } from './Note';
import { useNotes } from '../../hooks/note';
import { Form } from '../app/form/Form';

const NoteList = () => {
  const { loading, notes } = useNotes();

  if(loading) return <h1>Loading...</h1>;

  const noteElements = notes.map(note => (
    <li key={note.title}>
      <Note {...note} />
    </li>
  ));

  return (
    <div>
      <Form />
      <ul data-testid="notes">
        {noteElements}
      </ul>
    </div>
  );
};

export default NoteList;
