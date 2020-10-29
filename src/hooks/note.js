import { useEffect, useState } from 'react';
import { getNotes } from '../services/note-api';

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
