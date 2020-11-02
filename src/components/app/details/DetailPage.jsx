import React from 'react';
import { useNoteById } from '../../../hooks/note';

export const DetailPage = () => {
  const { loading, note } = useNoteById();

  if(loading) return <h1>Loading...</h1>;

  return (
    <div data-testid="note">
      <h3>{note.title}</h3>
      <p>{note.note}</p>
    </div>
  );
};
  
export default DetailPage;
