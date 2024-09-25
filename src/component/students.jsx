import React from 'react';
import { Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import courses from './image/courses.jpg.png';
import student from './image/student.jpg.png';
import branches from './image/branches.jpg.png';
import income from './image/income.jpg.png';
import lagout from './image/lagout.jpg.png';
import trainer from './image/trainer.jpg.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import graph from './image/graph.jpg';
import graph1 from './image/graph1.jpg';
import profile from './image/profile.jpg';
import  { useState } from 'react';

function StudentsComponent(){
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', grade: 'A', completed: false },
    { id: 2, name: 'Task 2', grade: 'B', completed: false },
    { id: 3, name: 'Task 3', grade: 'C', completed: false },
    {id:4,name:'Task 3', grade:'A',completed:false}
  ]);


  const updateGrade = (id, newGrade) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, grade: newGrade } : task)));
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

 

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
      
          
          <div className="d5">



            <Container>
              <Row>
                <Col>
                <h2>Hello Veera</h2>
                <p>Let's Learn Something new today!</p>
                </Col>
                <Col>
              
                <Form.Control  type="text" placeholder=''/>
                
                </Col>
                <Col>
                <h2>Profile</h2>
                
                
                
                </Col>
              </Row>
            </Container><br></br>
            <div>
              <Container>
                <h2>Overview</h2>
                <Row>
                  <Col  xs={2}>
                  <Card  style={{ width: '9rem',height:'8rem',backgroundImage: 'linear-gradient(to right, #73C2F8,#5097A4)' }}>
                 <Card.Body>
                 <h6>Course in Progress</h6>
                 <p style={{fontSize:'30px'}}>18</p>
                </Card.Body>
               </Card>
               </Col>
    <Col  xs={2}>
           <Card style={{ width: '9rem',height:'8rem',backgroundImage: 'linear-gradient(to right, #95C8D8, #6693F5 )' }}>
           <Card.Body>
           <h6>Course Completed</h6>
           <p style={{fontSize:'30px'}}>28</p>
           </Card.Body>
           </Card>
           </Col>
    <Col  xs={2}>
          <Card style={{ width: '9rem',height:'8rem' ,backgroundImage: 'linear-gradient(to right, #73C2F8,#5097A4 )'}}>
          <Card.Body>
          <h6>Certificaties Earned</h6>
          <p style={{fontSize:'30px'}}> 15</p>
          </Card.Body>
         </Card>
    </Col>
    
    <Col  xs={2}>
            <Card style={{ width: '9rem',height:'8rem',backgroundImage: 'linear-gradient(to right, #7285A5, #0080FE)' }}>
            <Card.Body>
            <h6>Community Support</h6>
            <p style={{fontSize:'30px'}}>87</p>
           </Card.Body>
          </Card>
    </Col>
   
   <Col  xs={4}style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
   <div style={{ textAlign: 'center' }}>
        <img
          src={profile}
          alt={`profile`}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '10px'
          }}
        />
        <h4>Veera</h4>
        <p>Joined: 01-08-2024</p>
      </div>
   
   </Col>
    
                </Row><br></br>
                <Row>
      <Col>
      <h2>Activitely Hours</h2>
    
      <Card style={{ width: '25rem', height: '14rem', display: 'flex', alignItems: 'center' }}>
  <Card.Body style={{ display: 'flex',  }}>
    <Card.Img variant="top" src={graph} alt="Logo" style={{ width: '200px', height: 'auto' }} />
    <p style={{ marginLeft: '10px' }}>Weekly</p>
  </Card.Body>
</Card>
      </Col>
      <Col>
      <h2>Performance</h2>
    
    <Card style={{ width: '25rem',height:'14rem',display: 'flex'}}>
    
    <Card.Body>
    <Card.Img variant="top" src={graph1} alt="Logo" style={{ width: '270px', height: '200px' }} />
   
    </Card.Body>
  </Card>
      
      
       </Col>
    </Row>
               
              </Container><br></br>
              <div style={{ width: '80%', overflowX: 'auto' }}>
      <h2>Task Grades and Status</h2>
      <table border="3" style={{ width: '100%', borderCollapse: 'collapse'}}>
        <thead  >
          <tr>
            <th>Task</th>
            <th>Grade</th>
            <th>Update Grade</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.grade}</td>
              <td>
                <select value={task.grade} onChange={(e) => updateGrade(task.id, e.target.value)}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="F">F</option>
                </select>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(task.id)}
                />
                {task.completed ? 'Completed' : 'Not Completed'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
             

</div>

            </div>
      
          </div>
        </div>
      );
}
export default StudentsComponent;