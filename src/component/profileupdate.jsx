import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import lightgrey from'../lightgrey.jpg';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



function ProfileupdateComponent(){


    return(<div>
       
      <div className="p1">
      <Container>
      <Row>
        <Col md={9}>
        <Card style={{ width: '40rem' }}>
      <Card.Body>
      <Row>
        <Col> 
        <Card.Img variant="top" src={lightgrey} altr="Logo"  />
        
        </Col>
        <Col className='m-4'>
      <h5>Kavitha Palagiri</h5>
      <p>kavitha@gmail.com</p>
      <p>Last seen 2 hours ago</p>
      <Button  className="btn btn-reset bg-dark w-100">Change Photo</Button>
        
        </Col>
        <Col> 

        <Button   className="btn btn-reset bg-dark w-100">Administrator</Button>
        <p  style={{fontSize:"12px"}}>Joined 05-04-2024</p>
        </Col>
        <p>Setting</p>
        <hr></hr>
        
        <Col>
        <Form.Group>
        <Form.Label> Full Name:</Form.Label>
        <Form.Control  type="text" placeholder='Enter your fullname'/>
        </Form.Group>
        </Col>
         <Col>
        <Form.Group>
        <Form.Label> Username:</Form.Label>
        <Form.Control  type="text"   placeholder='Enter Username@'/>
        </Form.Group>
        </Col>
        <Form.Group>
        <Form.Label> Email:</Form.Label>
        <Form.Control  type="text" placeholder='user@example.com'/>
        </Form.Group>





        <Form.Group>
        <Form.Label> About:</Form.Label>
        <Form.Control  type="text" placeholder='My Bio'   as="textarea" rows={3}  />
        </Form.Group>



        <Col>
        <Form.Group>
        <Form.Label> Password:</Form.Label>
        <Form.Control  type="text" placeholder='..'/>
        </Form.Group>
        

        <Form.Group>
        <Form.Label> Confirm Password:</Form.Label>
        <Form.Control  type="text" placeholder='..'/>
        </Form.Group>

        </Col>

        <Col>
        <h6>Keeping in Touch</h6>
         <p>Email Notifications</p>
         <input type="checkbox"/>
         <label > Instgram </label><br></br>
         <input type="checkbox"/>
         <label > Telegram</label><br></br>
         <input type="checkbox"/>
         <label > Person Offer </label><br></br><br></br>

        
        <Button   className="btn btn-reset bg-dark w-100">SaveChange</Button>
        
        </Col>
      </Row>
      </Card.Body>
    </Card>
        
        
        </Col>
        <Col md={3}>
      
        <Button   className="btn btn-reset bg-dark w-90">Logout</Button>
        <Card style={{ width: '15rem' }}>
        <Card.Body>
        <h6>Support</h6>
        <p>Get fast, free help from our friendly assistants.</p>
        <Button   className="btn btn-reset bg-dark w-100">Contat Us</Button>
          </Card.Body>
          </Card>
       </Col>
       
      </Row>
      </Container>
        </div>
     
    
      
    </div>)
} 
export default ProfileupdateComponent;