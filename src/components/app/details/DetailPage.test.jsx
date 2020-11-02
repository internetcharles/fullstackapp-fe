import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { getNoteById } from '../../../services/note-api';
import DetailPage from './DetailPage';

jest.mock('../../../services/note-api.js');

describe('DetailPage component', () => {
  it('renders details', async() => {
    getNoteById.mockResolvedValue(
      {
        title: 'yo',
        note: 'yo'
      }
    );
    render(
      <DetailPage />
    );

    screen.getByText('Loading...');

    const note = await screen.findByTestId('note');

    return waitFor(() => {
      expect(note).not.toBeEmptyDOMElement();
    });
  });
});
