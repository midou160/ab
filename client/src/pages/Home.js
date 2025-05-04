import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Card className="text-center shadow p-5">
        <h1 className="mb-3">Welcome to the Medical Lab System</h1>
        <p>Manage patients, analyses, and more with ease.</p>
      </Card>
    </Container>
  );
};

export default Home;
