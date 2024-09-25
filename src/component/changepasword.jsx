import { Button, Card, Form } from "react-bootstrap"
import React, { useState } from 'react';

function ChangepasswordComponent(){
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();
    
   
    const storedPassword = 'current_password'; 

    if (oldPassword !== storedPassword) {
      setMessage('Old password is incorrect');
    } else if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match');
    } else if (newPassword === oldPassword) {
      setMessage('New password cannot be the same as the old password');
    } else {
     
      localStorage.setItem('password', newPassword);
      setMessage('Password changed successfully');
    }
  };
  return(<div >
    <div className="c1">
 <Card style={{ width: '25rem' }}>
      <Card.Body>
      <h2 style={{textAlign:"center"}}>Change Password</h2>

     
      <form onSubmit={handleChangePassword}>
        <div>
          <Form.Group>
            <Form.Label>Old Password:</Form.Label>
            <Form.Control   type="password"value={oldPassword}  onChange={(e) => setOldPassword(e.target.value)} required/>
          </Form.Group>
        
        </div>
        <div>
        <Form.Group>
        <Form.Label>New Password:</Form.Label>
        <Form.Control    type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required/>
        </Form.Group>
        
        </div>
        <div>
        <Form.Group>
        <Form.Label> Confirm New Password:</Form.Label>
        <Form.Control  type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required/>
        </Form.Group>
        
        </div><br></br>
        <div style={{textAlign:"center"}}>
        <button type="submit" className="btn btn-reset bg-dark w-100"><span style={{color:"white"}}>Change Password</span></button>
        </div>
      </form>
      {message && <p>{message}</p>}
      </Card.Body>

    </Card>
  </div>
 
  </div>)
}
export default ChangepasswordComponent