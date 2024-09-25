import React, { useState } from "react";
import blackimage from './image/blackimage.jpg';
import { Form, Button, Container, Row, Col, Card, CardBody } from "react-bootstrap";

function ProfileUpdateUserComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [mobile, setMobile] = useState("8346566424");
  const [email, setEmail] = useState("john.smith@gantasoft.com");
  const [courses, setCourses] = useState("Java Fullstack");
  const [dob, setDob] = useState("1985-07-30");
  const [gender, setGender] = useState("Male");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Updated Profile:", {
      firstName,
      lastName,
      mobile,
      email,
      courses,
      dob,
      gender,
    });
  };

  return (
    <Container style={{  padding: "3%", border: "15px",width:"700px" }}>
      <Card style={{width:'30rem'}}> 
        <CardBody>
           <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="text-center mb-4">
            <img src={blackimage} alt='Profile' style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
      
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName" className="mt-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMobile" className="mt-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCourses" className="mt-3">
              <Form.Label>Courses</Form.Label>
              <Form.Control
                as="select"
                value={courses}
                onChange={(e) => setCourses(e.target.value)}
                required>
                <option value="">Select Courses</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="React.js">React.js</option>
                <option value="Web Development">Web Development</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDob" className="mt-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGender" className="mt-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Female</option>
                <option value="Female">Male</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

            <Button variant="dark" type="submit" className="mt-4 w-100">
              Update Profile
            </Button>
          </Form>
        </Col>
      </Row>
      </CardBody>
      </Card>

    </Container>
  );
}

export default ProfileUpdateUserComponent;
