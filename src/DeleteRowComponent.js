// DeleteRowComponent.js

import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteRowComponent = ({ handleDeleteRow, id }) => {
  return (
    <Button variant="danger" onClick={() => handleDeleteRow(id)}>
      Delete
    </Button>
  );
};

export default DeleteRowComponent;
