import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <h2>Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card className="shadow p-3 mb-4">
            <Card.Body>
              <Card.Title>Patients</Card.Title>
              <Card.Text>View and manage patients.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3 mb-4">
            <Card.Body>
              <Card.Title>Analyses</Card.Title>
              <Card.Text>Manage laboratory analyses.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
