import React, { useState } from 'react';
import { postNote } from '../../../services/note-api';

export const Form = () => {

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    postNote(title, note);
  };
  
  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleNoteChange = ({ target }) => {
    setNote(target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={handleTitleChange} />
        <input type="text" placeholder="Note" onChange={handleNoteChange} />
        <button>Post</button>
      </form>
    </div>
  );
};
