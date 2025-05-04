import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/patients', { name, birthDate }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Patient added successfully!');
      setName('');
      setBirthDate('');
    } catch (error) {
      setMessage('Failed to add patient.');
    }
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h3 className="mb-3">Add New Patient</h3>
        {message && <Alert>{message}</Alert>}
        <Form onSubmit={handleAdd}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} required />
          </Form.Group>
          <Button type="submit" className="w-100">Add Patient</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddPatient;