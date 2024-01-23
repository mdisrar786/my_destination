// AddRowComponent.js

import React from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';

const AddRowComponent = ({ showModal, handleClose, handleShow, handleAddRow, formData, handleInputChange, validationError }) => {
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Row
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Row</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {validationError && <Alert variant="danger">{validationError}</Alert>}
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formClass">
              <Form.Label>Class</Form.Label>
              <Form.Control
                as="select"
                name="class"
                value={formData.class}
                onChange={handleInputChange}
              >
                <option value="">Select Class</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddRow}>
            Add Row
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddRowComponent;
