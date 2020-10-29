import React from 'react';
import PropTypes from 'prop-types';

export const Note = ({ title, note }) => (
  <div>
    <h3>{title}</h3>
    <p>{note}</p>
  </div>
);

Note.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired
};

export default Note;
