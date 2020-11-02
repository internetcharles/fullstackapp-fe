import { useEffect, useState } from 'react';
import { getNotes, getNoteById } from '../services/note-api';

export const useNotes = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
      .then(fetchedNotes => setNotes(fetchedNotes))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    notes
  };
};

export const useNoteById = (id) => {
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState([]);

  useEffect(() => {
    getNoteById(id)
      .then(fetchedNote => setNote(fetchedNote))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    note
  };
};
