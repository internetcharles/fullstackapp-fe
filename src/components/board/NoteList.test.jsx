import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import NoteList from './NoteList';
import { getNotes } from '../../services/note-api';

jest.mock('../../services/note-api');

describe('NoteList component', () => {
  it('displays a list of notes', async() => {
    getNotes.mockResolvedValue([
      {
        title: 'yo',
        note: 'yo'
      }
    ]);
    render(<NoteList />);

    screen.getByText('Loading...');

    const noteList = await screen.findByTestId('notes');

    return waitFor(() => {
      expect(noteList).not.toBeEmptyDOMElement();
    });
  });
});
