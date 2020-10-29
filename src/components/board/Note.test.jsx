import React from 'react';
import { render } from '@testing-library/react';
import Note from './Note';

describe('Note component', () => {
  it('renders note', () => {
    const { asFragment } = render(<Note 
      title="Cheese"
      note="Cheese"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
