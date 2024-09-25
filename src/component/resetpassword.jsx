import { Button, Card, Form} from "react-bootstrap";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"; 

function ResetpasswordComponent() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(false);
  const [emailError, setEmailError] = useState('');

  const storedEmail = 'user@example.com';
  const storedOtp = '123456'; 
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
    } else if (otp !== storedOtp) {
      setMessage('Invalid OTP');
    } else if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      localStorage.setItem('password', newPassword);
      setMessage('Password reset successfully');
      navigate('/resetpassword'); 
    }
  };

  const handleSendOTP = () => {
    if (!email) {
      setEmailError('Please enter a valid email address');
      return;
    }
   
    setMessage('OTP sent to your email');
  };

  return (
    <div className="c2">
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <h3 style={{ textAlign: "center" }}>Forgot Password</h3>
          <p>You will receive an email with instructions to  enter an otp your password if an account exists for this email</p>

          <form onSubmit={handleForgotPassword} noValidate validated={validated.toString()}>
            <div>
              
            </div>
            <div>
              <Form.Group controlId="formOtp">
                <Form.Label>OTP:</Form.Label>
                <Form.Control
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                />
              </Form.Group>
            </div>
            <br />
            <div>
            <Button onClick={handleSendOTP} className="btn btn-dark w-100 mt-2">
                Re-Send OTP
              </Button>
            <Link to="/resend"   style={{ textDecoration: 'none' }}>
              <Button onClick={handleSendOTP} className="btn btn-dark w-100 mt-2">
                Reset Password
              </Button>
              </Link>
            </div>
            <div className="m-2 p-2">
              <p>Already have an account? <span style={{ color: "blue" }}>Sign In</span></p>
              <p>Don't have an account yet? <span style={{ color: "blue" }}>Create Account</span></p>
            </div>
          </form>
          {message && <p>{message}</p>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ResetpasswordComponent;
