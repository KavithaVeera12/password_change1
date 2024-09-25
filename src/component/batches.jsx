import { Link } from 'react-router-dom';
import courses from './image/courses.jpg.png';
import student from './image/student.jpg.png';
import branches from './image/branches.jpg.png';
import income from './image/income.jpg.png';
import lagout from './image/lagout.jpg.png';
import trainer from './image/trainer.jpg.png';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';

function BatchesComponent(){


  const [batches, setBatches] = useState([
    { id: 1, name: "Batch A", startDate: "2024-09-01", endDate: "2024-12-01" },
    { id: 2, name: "Batch B", startDate: "2024-10-01", endDate: "2024-01-01" },

  ]);
  const [newBatch, setNewBatch] = useState({ name: '', startDate: '', endDate: '' });

  const handleAddBatch = (event) => {
    event.preventDefault();
    const nextId = batches.length ? batches[batches.length - 1].id + 1 : 1;
    setBatches([...batches, { id: nextId, ...newBatch }]);
    setNewBatch({ name: '', startDate: '', endDate: '' });
  };
    return (<div className="admin-dashboard">
        <div className="sidebar">
          <h4 style={{ backgroundColor: "blue", color: 'white', padding: "3px", margin: "2px" }}>Dashboard</h4><br></br>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/courses" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
                <img src={courses} alt='Courses Logo' style={{ marginRight: '8px', height: '24px', width: '24px' }} />
                <h5>Courses</h5>
              </Link>
            </li><br></br>
            <li>
              <Link to="/students" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center'  }}>
              <img src={student} alt='student ' style={{ marginRight: '8px', height: '24px', width: '24px' }} />
              <h5>Students</h5></Link>
            </li><br></br>
            <li>
              <Link to="/trainers" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center'  }}>
              <img src={trainer} alt='trainer ' style={{ marginRight: '8px', height: '24px', width: '24px' }} />
              <h5>Trainers</h5></Link>
            </li><br></br>
            <li>
              <Link to="/income" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center'  }}>
              <img src={income} alt='income ' style={{ marginRight: '8px', height: '24px', width: '24px' }} />
              <h5>Income</h5></Link>
            </li><br></br>
            <li>
              <Link to="/batches" style={{ textDecoration: 'none', color: 'black' , display: 'flex', alignItems: 'center' }}>
              <img src={branches} alt='branches ' style={{ marginRight: '8px', height: '24px', width: '24px' }} />
              <h5>Batches</h5></Link>
            </li><br></br>
            <li>
              <Link to="/logout" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center'  }}>
              <img src={lagout} alt='lagout ' style={{ marginRight: '8px', height: '24px', width: '24px' }} />
              <h5>Logout</h5></Link>
            </li>
          </ul>
        </div>
        
        z
          
          <div className="d2">
          <Container style={{ marginTop: '20px' ,backgroundColor:'#131E3A',color:'white'}}>
      <Row>
        <Col>
          <h3>Batches List</h3>
          <ListGroup style={{backgroundColor:'#131E3A',color:'white'}}>
            {batches.map(batch => (
              <ListGroup.Item key={batch.id}>
                <strong>{batch.name}</strong><br />
                Start Date: {batch.startDate}<br />
                End Date: {batch.endDate}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <h3>Add New Batch</h3>
          <Form onSubmit={handleAddBatch}>
            <Form.Group controlId="formBatchName">
              <Form.Label>Batch Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter batch name"
                value={newBatch.name}
                onChange={(e) => setNewBatch({ ...newBatch, name: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="formStartDate" className="mt-3" style={{backgroundColor:'#131E3A',color:'white'}}>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={newBatch.startDate}
                onChange={(e) => setNewBatch({ ...newBatch, startDate: e.target.value })}
                required
              />
            </Form.Group>
 
            <Form.Group controlId="formEndDate" className="mt-3" style={{backgroundColor:'#131E3A',color:'white'}}>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={newBatch.endDate}
                onChange={(e) => setNewBatch({ ...newBatch, endDate: e.target.value })}
                required
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="mt-4" style={{backgroundColor:'#131E3A',color:'white'}}>
              Add Batch
            </Button>
            
          </Form>
        </Col>
      </Row>
    </Container>
          </div>
        </div>
      );
}
export default BatchesComponent;