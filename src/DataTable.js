// DataTable.js

import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import AddRowComponent from './AddRowComponent';
import DeleteRowComponent from './DeleteRowComponent';

const DataTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    // { id: 1, name: 'John Doe', gender: 'Male', age: 25, class: 'I' },
    // { id: 2, name: 'Jane Doe', gender: 'Female', age: 28, class: 'II' },
    // Add more initial data or fetch data from APIs
  ]);

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    class: '',
  });

  const [validationError, setValidationError] = useState('');

  const handleClose = () => {
    setShowModal(false);
    setFormData({
      name: '',
      gender: '',
      age: '',
      class: '',
    });
    setValidationError('');
  };

  const handleShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddRow = () => {
    // Validate form fields
    if (!formData.name || !formData.gender || !formData.age || !formData.class) {
      setValidationError('All fields are required.');
      return;
    }

    const newRow = {
      id: data.length + 1,
      ...formData,
    };
    setData([...data, newRow]);
    handleClose();
  };
//delete 
  const handleDeleteRow = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <AddRowComponent
        showModal={showModal}
        handleClose={handleClose}
        handleShow={handleShow}
        handleAddRow={handleAddRow}
        formData={formData}
        handleInputChange={handleInputChange}
        validationError={validationError}
      />

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.gender}</td>
              <td>{row.age}</td>
              <td>{row.class}</td>
              <td>
                <DeleteRowComponent handleDeleteRow={handleDeleteRow} id={row.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
