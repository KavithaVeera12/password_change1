import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
function LogoutComponent(){
    const [trainer, setTrainer] = useState([
        { id: 1, name: "Alice Johnson",  department: "java", email: "alice.johnson@example.com", phone: "123-456-7890" },
        { id: 2, name: "Bob Smith",  department: "Python", email: "bob.smith@example.com", phone: "098-765-4321" }
      ]);
      const [newTrainer, setNewTrainer] = useState({ name: '', position: '', department: '', email: '', phone: '' });
    
      const handleAddTrainer = (event) => {
        event.preventDefault();
        const nextId = trainer.length ? trainer[trainer.length - 1].id + 1 : 1;
        setTrainer([...trainer, { id: nextId, ...newTrainer }]);
        setNewTrainer({ name: '', department: '', email: '', phone: '' });
      };
    return(<div>
  <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col>
          <h3>Trainer List</h3>
          <ListGroup>
            {trainer.map(trainer => (
              <ListGroup.Item key={trainer.id}>
                <strong>{trainer.name}</strong><br />
             
                Department: {trainer.department}<br />
                Email: {trainer.email}<br />
                Phone: {trainer.phone}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <h3>Add New Trainer</h3>
          <Form onSubmit={handleAddTrainer}>
            <Form.Group controlId="formTrainer">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter trainer name"
                value={newTrainer.name}
                onChange={(e) => setNewTrainer({ ...newTrainer, name: e.target.value })}
                required
              />
            </Form.Group>

          

            <Form.Group controlId="formTrainerDepartment" className="mt-3">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter department"
                value={newTrainer.department}
                onChange={(e) => setNewTrainer({ ...newTrainer, department: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTrainerEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newTrainer.email}
                onChange={(e) => setNewTrainer({ ...newTrainer, email: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTrainerPhone" className="mt-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={newTrainer.phone}
                onChange={(e) => setNewTrainer({ ...newTrainer, phone: e.target.value })}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Add Trainer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>)
}
export default LogoutComponent;