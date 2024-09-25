import { Button, Card, Form } from "react-bootstrap";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"; 

function ForgotpasswordComponent() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(false);
  const [emailError, setEmailError] = useState('');

  const storedEmail = 'user@example.com';
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setValidated(true);

    if (!email) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    if (email !== storedEmail) {
      setMessage('Email not found');
    } else if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      localStorage.setItem('password', newPassword);
      setMessage('Password reset successfully');
      navigate('/resetpassword'); 
    }
  };

  return (
    <div className="c2">
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <h3 style={{ textAlign: "center" }}>Forgot Password</h3>

          <form onSubmit={handleForgotPassword} noValidate validated={validated.toString()}>
            <div>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter an email"
                  required
                  isInvalid={!!emailError}
                />
                <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <br />
            <div>
            <Link to="/resetpassword"   style={{ textDecoration: 'none' }}>
              <Button type="submit" className="btn btn-reset bg-dark w-100">
                <span style={{ color: "white" }}>Send OTP</span>
              </Button>
              </Link>
         
            </div>
            <div className="m-4 p-2">
              <p>Already have an account? <span style={{ color: "blue" }}>Sign In</span></p>
              <p>Don't have an account yet?<span style={{ color: "blue" }}>Create Account</span></p>
            </div>
          </form>
          {message && <p>{message}</p>}
        </Card.Body>
      </Card>



      
    </div>
  );
}

export default ForgotpasswordComponent;
