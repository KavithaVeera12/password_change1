import React from 'react';
import { Button, ButtonGroup, CardImg, Col, Container, FormSelect, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import courses from './image/courses.jpg.png';
import student from './image/student.jpg.png';
import branches from './image/branches.jpg.png';
import income from './image/income.jpg.png';
import lagout from './image/lagout.jpg.png';
import trainer from './image/trainer.jpg.png';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import graph2 from './image/graph2.jpg';
function TrainersComponent(){
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
        
          <div className="d6">
            <div >
         <Container>
          <Row>
            <Col>
            <Card style={{ width: '18rem',backgroundColor:'#131E3A' }}>
      <Card.Body >
       <Row>
        <Col style={{color:'white'}}><h6>Today's task</h6>
        </Col>
        <Col >
        <span style={{color:'blue'}}><h6>Maanage</h6></span>
        </Col>
       </Row>
       <ListGroup variant="flush" style={{backgroundColor:'#131E3A',border: '1px solid white' }}>
        <ListGroup.Item style={{backgroundColor:'#131E3A',color:'white' }}>*How to install JDK</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'#131E3A',color:'white' }}>*Creating multiple web pages</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'#131E3A',color:'white' }}>*Learning about array methods</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'#131E3A',color:'white' }}>*How to install node.js</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'#131E3A',color:'white' }}>*How to install JDK</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'#131E3A',color:'white' }}>*Creating multiple web pages</ListGroup.Item>
       
      </ListGroup>




      </Card.Body>
    </Card>
            
            
            </Col>




            <Col>
            <Card style={{ width: '20rem',height:'18rem', backgroundColor:'#131E3A',color:"white" }}>
      <Card.Body>
      <Row>
        <Col><h6>Today's meetings 6</h6>
        </Col>
        <Col>
        <span style={{color:'blue'}}><h6>view all</h6></span>
        <select style={{color:'blue'}}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
        </Col>
       </Row><br></br>
       <Row>
        <Col xs={6} style={{ border: '1px solid white' }}>
        <Card style={{ width: '8rem',height:'6rem',backgroundColor:'#131E3A',color:"white" }}>
        <Card.Body>
          <p>10:00 AM<br></br>
          <span style={{fontSize:'9px'}}>Present the project and gather feedback</span></p>
          </Card.Body>
          </Card>
        </Col>
        <Col xs={6} style={{ border: '1px solid white' }}>
        <Card style={{ width: '8rem',backgroundColor:'#131E3A',color:"white" }}>
        <Card.Body>

        <p>01:00 PM<br></br>
        <span style={{fontSize:'9px'}}>Metting with UX team</span></p>
          </Card.Body>
          </Card>
        </Col>
       </Row>
       <Row>
        <Col xs={6} style={{ border: '1px solid white' }}>
        
        <Card style={{ width: '8rem',height:'6rem',backgroundColor:'#131E3A',color:"white" }}>
        <Card.Body>
          <p>3:00 PM<br></br>
          <span style={{fontSize:'9px'}}>Onboarding the project</span></p>
          </Card.Body>
          </Card>
        
        </Col>
        <Col xs={6} style={{ border: '1px solid white' }}>
        <Card style={{ width: '8rem',height:'6rem',backgroundColor:'#131E3A',color:"white" }}>
        <Card.Body>
          <p>+
          <span style={{fontSize:'9px'}}>Schedule Meeting</span></p>
          </Card.Body>
          </Card>
        
        </Col>
       </Row>
      </Card.Body>
    </Card>
            
            
            
            </Col>
            <Col>
            <Card style={{ width: '18rem',backgroundColor:'#131E3A',color:'white' }}>
            <Card.Body >
              <h6>Activity <span style={{color:'orange'}}>+12%</span></h6>
              <p style={{fontSize:'25px'}}>70%</p>
              <Card.Img variant="top" src={graph2} alt="Logo" style={{ width: '270px', height: '200px' }} />
              </Card.Body>
              </Card>
            
            
            
            
            </Col>
          </Row>
         </Container>
         </div><br></br>

         <div>
          <ButtonGroup>
            <Button>Today</Button>
            <Button>Week</Button>
            <Button>Month</Button>
            <Button>year</Button>
          </ButtonGroup><br></br>
          <Container>
            <Row style={{ border: '1px solid white' }} >
            <Col xs={2} style={{ border: '1px solid white' }}>Mon
            <Card style={{ width: '10rem',height:'10rem',backgroundColor:'#131E3A',color:'white' }}>
            <Card.Body >
              <p style={{color:'Pink'}}>.High</p>
              <h6>Introduction of Web Development</h6>
            
              </Card.Body>
              </Card>
            
            
            
            </Col>
        <Col xs={2} style={{ border: '1px solid white' }}>Tue
        <Card style={{ width: '10rem',height:'10rem',backgroundColor:'#131E3A',color:'white' }}>
            <Card.Body >
              <p style={{color:'green'}}>.Done</p>
              <h6>Completed the java install </h6>
              </Card.Body>
              </Card>
        
        </Col>
        <Col xs={2} style={{ border: '1px solid white' }}>Wed
        <Card style={{ width: '10rem',height:'10rem',backgroundColor:'#131E3A',color:'white' }}>
            <Card.Body >
              <p style={{color:'orange'}}>.Medium</p>
              <h6>Today telling some how to design cards</h6>
              </Card.Body>
              </Card>
        
        
        </Col>
        <Col xs={2} style={{ border: '1px solid white' }}>Thu
        <Card style={{ width: '10rem',height:'10rem',backgroundColor:'#131E3A',color:'white' }}>
            <Card.Body >
              <p style={{color:'pink'}}>.High</p>
              <h6>How to install github </h6>
              </Card.Body>
              </Card>
        
        
        </Col>
        <Col xs={2} style={{ border: '1px solid white' }}>Fri
        <Card style={{ width: '10rem',height:'10rem',backgroundColor:'#131E3A',color:'white' }}>
            <Card.Body >
              <p style={{color:'red'}}>.Low</p>
              <h6>Layout's design</h6>

              </Card.Body>
              </Card>
        
        
        
        </Col>
        <Col xs={2} style={{ border: '1px solid white' }}>Sat
        
        <Card style={{ width: '10rem',height:'10rem',backgroundColor:'#131E3A',color:'white' }}>
            <Card.Body >
              <p style={{color:'green'}}>.Done</p>
              <h6>Weelk test Completed</h6>
              </Card.Body>
              </Card>
        
        
        
        
        </Col>
            </Row>
          </Container>
         </div>
          </div>
        </div>
      );
}
export default TrainersComponent;