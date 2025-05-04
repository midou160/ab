import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#eee' }}>
    <Link to="/">Home</Link> |{' '}
    <Link to="/dashboard">Dashboard</Link> |{' '}
    <Link to="/add-patient">Add Patient</Link> |{' '}
    <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;
