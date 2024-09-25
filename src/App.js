
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import ChangepasswordComponent from './component/changepasword';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import ForgotpasswordComponent from './component/forgotpaword';
import ProfileupdateComponent from './component/profileupdate';
import AttendenceComponent from './component/admindashboard';
import ResetpasswordComponent from './component/resetpassword';
import AdmindashboardComponent from './component/admindashboard';
import CoursesComponent from './component/courses';
import StudentsComponent from './component/students';
import TrainersComponent from './component/trainers';
import IncomeComponent from './component/income';

import LogoutComponent from './component/logout';
import BatchesComponent from './component/batches';
import Resendomponent from './component/resend';
import ProfileupdateuserComponent from './component/profileupdateuser';



function App() {
  return (
    <div className="k1">
      
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavbarBrand>
          <Nav>
            <NavLink href='/changepassword'>ChangePassword</NavLink>
            <NavLink href='/forgotpassword'>ForgotPassword</NavLink>
            <NavLink href='/profileupdate'>profileupdate</NavLink>
            <NavLink href='/admindashboard'>Admin Dashboard</NavLink>
            <NavLink href="/profileupdatetrainer">Profileupdateuser</NavLink>
          
           
          </Nav>
        </NavbarBrand>
      </Container>
    </Navbar>
    <BrowserRouter>
    <Routes>
      <Route path='/changepassword' element={<ChangepasswordComponent/>}></Route>
      <Route path='/forgotpassword' element={<ForgotpasswordComponent/>}></Route>
      <Route path='/profileupdate' element={<ProfileupdateComponent/>}></Route>
      <Route path='/admindashboard' element={<AdmindashboardComponent/>}></Route>
      <Route path='/resetpassword' element={<ResetpasswordComponent/>}></Route>
      <Route path='/courses' element={<CoursesComponent/>}></Route>
      <Route path='/students' element={<StudentsComponent/>}></Route>
      <Route path='/trainers' element={<TrainersComponent/>}></Route>
      <Route path='/income' element={<IncomeComponent/>}></Route>
      <Route path='/Batches' element={<BatchesComponent/>}></Route>
      <Route path='/logout' element={<LogoutComponent/>}></Route>
      <Route path='/resend' element={<Resendomponent/>}></Route>
      <Route path='/profileupdatetrainer' element={<ProfileupdateuserComponent/>}></Route>
      </Routes>
    </BrowserRouter>
    
   
    </div>
  );
}

export default App;
