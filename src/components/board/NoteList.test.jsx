import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import NoteList from './NoteList';
import { getNotes } from '../../services/note-api';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/note-api');

describe('NoteList component', () => {
  it('displays a list of notes', async() => {
    getNotes.mockResolvedValue([
      {
        title: 'yo',
        note: 'yo'
      }
    ]);
    render(<MemoryRouter>
      <NoteList />
    </MemoryRouter>);

    screen.getByText('Loading...');

    const noteList = await screen.findByTestId('notes');

    return waitFor(() => {
      expect(noteList).not.toBeEmptyDOMElement();
    });
  });
});
