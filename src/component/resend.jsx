import { Card, Form } from "react-bootstrap";
import React, { useState } from 'react';

function ResendComponent() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
     
      localStorage.setItem('password', newPassword);
      setMessage('Password changed successfully');
    }
  };

  return (
    <div>
      <div className="c1">
        <Card style={{ width: '25rem' }}>
          <Card.Body>
            <h2 style={{ textAlign: "center" }}>Change Password</h2>
            <form onSubmit={handleChangePassword}>
              <Form.Group>
                <Form.Label>New Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm New Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <br></br>
              <div style={{ textAlign: "center" }}>
                <button type="submit" className="btn btn-reset bg-dark w-100">
                  <span style={{ color: "white" }}>Submit</span>
                </button>
              </div>
            </form>
            {message && <p>{message}</p>}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ResendComponent;
