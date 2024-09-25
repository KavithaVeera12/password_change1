import React from 'react';
import { Link } from 'react-router-dom';
import courses from './image/courses.jpg.png';
import student from './image/student.jpg.png';
import trainer from './image/trainer.jpg.png';
import income from './image/income.jpg.png';
import branches from './image/branches.jpg.png';
import lagout from  './image/lagout.jpg.png'

function AdminDashboardWithSidebar() {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h4 style={{backgroundColor:"blue",color:'white',padding:"3px",margin:"2px"}}>Dashboard</h4><br></br>
        <ul>
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
      
      <div className="d1">
        <p>Select an option from the sidebar.</p>
      </div>
    </div>
  );
}

export default AdminDashboardWithSidebar;
