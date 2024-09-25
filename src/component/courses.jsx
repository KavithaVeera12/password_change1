import React from 'react';
import { Link } from 'react-router-dom';
import courses from './image/courses.jpg.png';
import student from './image/student.jpg.png';
import branches from './image/branches.jpg.png';
import income from './image/income.jpg.png';
import lagout from './image/lagout.jpg.png';
import trainer from './image/trainer.jpg.png';
import Card from 'react-bootstrap/Card';
import { CardFooter, CardImg, Container} from 'react-bootstrap';
import java from './image/java.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import  python from './image/python.jpg';
 import react from './image/react.jpg';
 import web from './image/web.jpg';
 import angular from './image/angular.jpg';
 import devops from './image/devops.jpg';
 import sql from './image/sql.jpg';
 import powerbi from './image/powerbi.jpg';
function CoursesComponent() {
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
      
      <div className="d3">
    
   
    <Container>
    <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
    
    <Card.Img variant="top" src={java} alt="Logo" style={{ width: '100%', height: 'auto' }} />
    <CardFooter><h5>Java Fullstack</h5></CardFooter>
  </Card>
        
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
    
    <Card.Img variant="top" src={python} alt="Logo" style={{ width: '100%', height: 'auto' }} />
    <CardFooter><h5>Python Fullstack</h5></CardFooter>
  </Card>
        
        
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
    
    <Card.Img variant="top" src={react} alt="Logo" style={{ width: '100%', height: '160px' }} />
    <CardFooter><h5>React.js</h5></CardFooter>
  </Card>
        
        </Col>
      </Row>
    </Container><br></br>
    <div>
      <Container>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
    
    <Card.Img variant="top" src={web} alt="Logo" style={{ width: '100%', height: 'auto' }} />
    <CardFooter><h5>Web Development</h5></CardFooter>
  </Card>
     </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
    
    <Card.Img variant="top" src={angular} alt="Logo" style={{ width: '100%', height: 'auto' }} />
    <CardFooter><h5>Angular</h5></CardFooter>
  </Card>
          
          
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
    
    <Card.Img variant="top" src={devops} alt="Logo" style={{ width: '100%', height: 'auto' }} />
    <CardFooter><h5>Devops/AWS</h5></CardFooter>
  </Card>
          
          
          </Col>
        </Row>
      </Container>
    </div><br></br>
    <div>
      <Container>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
    
    <Card.Img variant="top" src={sql} alt="Logo" style={{ width: '100%', height: 'auto' }} />
    <CardFooter><h5>SQl</h5></CardFooter>
  </Card>
          
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
    
    <Card.Img variant="top" src={powerbi} alt="Logo" style={{ width: '100%', height: 'auto' }} />
    <CardFooter><h5>Power BI</h5></CardFooter>
  </Card>
          
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
      </div>
    </div>
  );
}

export default CoursesComponent;
