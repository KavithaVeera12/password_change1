import React from 'react';
import { Button, Container, Row,Col, Card, ListGroup, ListGroupItem, CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import courses from './image/courses.jpg.png';
import student from './image/student.jpg.png';
import branches from './image/branches.jpg.png';
import income from './image/income.jpg.png';
import lagout from './image/lagout.jpg.png';
import trainer from './image/trainer.jpg.png';
import dollar from './image/dollargreen.jpg.png';
import red  from './image/dollarred.jpg.png';
import blue from './image/dollarblue.jpg.png';
import calender from './image/calender.jpg';

function IncomeComponent(){
    return (
        <div className="admin-dashboard">
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
      
          
          <div className="d4">
            <h4>Overview</h4>

            <div>
              <Container>
                <Row>
                  <Col xs={4}>
                  <Card style={{ width: '18rem',backgroundColor:'#131E3A',color:'white' }}>
                  <Card.Body >

                    <h6>All Transcation +</h6>

                    <ListGroup variant="flush" style={{backgroundColor:'#131E3A' }}>
        <ListGroup.Item style={{backgroundColor:'#131E3A',color:'white' }}>
          <Row>
            <Col>Java</Col>
            <Col style={{color:"green"}}>Rs.20,000</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'#131E3A',color:'white' }}>
        <Row>
            <Col>Python</Col>
            <Col style={{color:"red"}}>Rs.20,000</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'#131E3A',color:'white' }}>
        <Row>
            <Col>React.js</Col>
            <Col style={{color:"red"}}>Rs.10,000</Col>
          </Row>
        </ListGroup.Item>
        
      </ListGroup>
      
                    </Card.Body>
                    </Card>
                    
                  
                  </Col>
                  <Col xs={4}>
                  <Card style={{ width: '18rem',backgroundColor:'#131E3A',color:'white' }}>
                  <Card.Body >
                    <h6>Reports +</h6>
                    <ListGroup variant="flush" style={{backgroundColor:'#131E3A' }}>
        <ListGroup.Item style={{backgroundColor:'#131E3A',color:'white' }}>
          <Row>
            <Col>
            <img variant="top" src={dollar} alt="Logo" style={{ width: '20px', height: 'auto' }} />
            <p>$14.34</p>
           
            </Col>
            <Col>
            
            <img variant="top" src={red} alt="Logo" style={{ width: '20px', height: 'auto' }}/>
            <p>$ 16.234</p>
            
            
            </Col>
         
          </Row>
        </ListGroup.Item>
        </ListGroup>

        <Row>
                      <Col>
                      <ListGroup  variant="flush" style={{backgroundColor:'#131E3A' }}>
                        <ListGroupItem   style={{backgroundColor:'#131E3A',color:'white' }}  >
                        <img variant="top" src={blue} alt="Logo" style={{ width: '20px', height: 'auto' }}/>

                        <p>$18.89</p>
                        </ListGroupItem>
                        
                        
                        
                        </ListGroup></Col>
                    </Row>
                    </Card.Body>
                    </Card>
                  
                  </Col>
                  
                  <Col xs={4}>
                  <Card style={{ width: '18rem',backgroundColor:'#131E3A',color:'white' }}>
                  <Card.Body >
                    <h6>Schedular +</h6>
                    <img variant="top" src={calender} alt="Logo" style={{ width: '200px', height: '00px' }}/>
                    </Card.Body>
                    </Card>
                  </Col>
                </Row>
          
          <Row>
            <Col xs={4}>
            <Card style={{ width: '18rem',backgroundColor:'#131E3A',color:'white' }}>
              <CardBody>
                <hb6>Riteriment +</hb6>
                <ListGroup>
                  <ListGroupItem>
                  <Col>
                  <img variant="top" src={blue} alt='Logo' style={{width:"",height:"auto"}}/>
                  </Col>
                  </ListGroupItem>
                  <ListGroupItem></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
            </Col>
            <Col xs={4}>
            <Card  style={{ width: '18rem',backgroundColor:'#131E3A',color:'white' }}>
              <CardBody>
               <ListGroup>
                <ListGroupItem></ListGroupItem>
               </ListGroup>
              </CardBody>
            </Card>
            </Col>
            <Col xs={4}>
            <Card style={{ width: '18rem',backgroundColor:'#131E3A',color:'white' }}>
              <CardBody>
                <ListGroup>
                  <ListGroupItem></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
            </Col>
          </Row>
              </Container>
            </div>
          </div>
        </div>
      );
}
export default IncomeComponent;
    