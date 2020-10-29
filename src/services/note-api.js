const fetch = require('node-fetch');

const URL = 'http://localhost:7890/api/v1/notes';

export const getNotes = () => {
  return fetch(`${URL}`)
    .then(res => res.json())
    .then(json => json.map(note => ({
      title: note.title,
      note: note.note
    })));
};
