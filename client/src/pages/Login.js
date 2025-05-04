import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="mb-3 text-center">Login</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="username" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </Form.Group>
          <Button type="submit" className="w-100">Login</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
