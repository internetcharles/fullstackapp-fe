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

export const getNoteById = (id) => {
  return fetch(`${URL}/${id}`)
    .then(res => res.json())
    .then(json => json.map(note => ({
      title: note.title,
      note: note.note
    })));
};

export const postNote = (title, note) => {
  return fetch(`${URL}`, { 
    method: 'POST', 
    body: JSON.stringify({ title, note }), 
    headers: { 'Content-Type': 'application/json' } 
  })
    .then(res => res.json())
    .then(res => console.log(res));
};

