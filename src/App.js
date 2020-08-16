import React, {useState} from 'react';
import './App.css';
import { Button , Card, Jumbotron, Carousel, Modal , Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="App">

      <navbar> 

        <ul> 

          <li> Home</li>
          <li>Products</li> 
          <li> Contact</li>
        </ul>
      </navbar>
      <header>
        <Row>
  <img src={require('./images/banner.png')} className="w-100"></img> 
  </Row>
  </header>
  <h5> Discover the best</h5>
  <p className="legend"> It is a long established fact that a reader will be distracted </p>

  <Container>

  <div className ="products"> 

  <Row> 
    <div className="product">
    <img src={require('./images/i1.png')}></img> 
    <h6> Office Chair</h6>
    <div>
       <p> Original design</p>
      <button className="About"> About </button>
    </div>
    </div>

    <div className="product">
    <img src={require('./images/i2.png')}></img> 
    <h6> Office Chair</h6>
    <div>
       <p> Original design</p>
      <button className="About" onClick={handleShow}> About </button>
    </div>
    </div>

    <div className="product">
    <img src={require('./images/i3.png')}></img> 
    <h6> Office Chair</h6>
    <div>
       <p> Original design</p>
      <button className="About"> About </button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
        <img src={require('./images/i2.png')}></img> 
        </Modal.Header>
        <Modal.Body>
          <h4>Office Chair </h4>
          It is a long established fact that a reader will be distracted 
          by the readable content of a page when looking at its layout. The point of using Lorem Ipsum 
          is that it has a more-or-less normal distribution of letters,</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="danger">
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
    </div>
    </Row>
  </div>
  <Row >
    <div classname="Section">
    <div className="Banner3"> 
    <img src={require('./images/banner3.png')}></img> 

    </div>
    <div className="Newsletter">
    <img src={require('./images/texture.png')}></img> 

<div className="email"> 
<h6> Join the Newsletter</h6>
<div>
<InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's email"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2" variant="success">@example.com</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
  </div>
<button> Subscrible</button>
</div>

    </div>
    </div>
   </Row>

   <Row> 

     <div className="Galeria">

     <img src={require('./images/i4.png')}></img> 
     <img src={require('./images/i5.png')}></img> 
     <img src={require('./images/i6.png')}></img> 


     </div>
   </Row>
  

   
  </Container>
  <footer> 


  <div> 
  <img src={require('./images/facebook 1.png')}></img> 
  <img src={require('./images/instagram 1.png')}></img> 

  <img src={require('./images/whatsapp 1.png')}></img> 



  <p>+2127 29329</p>
  <p>contato@email.com</p>
  <p>Lorem ipsum sons eleft for the brain</p> 
</div>
</footer>
 
   </div>
  );
}


export default App;
