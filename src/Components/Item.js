import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/Item.css';
import img1 from'../Assets/imgs/item.jpg';
import img2 from'../Assets/imgs/pay1.png';
import img3 from'../Assets/imgs/pay2.png';
import img4 from'../Assets/imgs/pay3.png';
import img5 from'../Assets/imgs/pay4.png';
import img6 from'../Assets/imgs/pro1.jpg';
import img7 from'../Assets/imgs/pro2.jpg';
import img8 from'../Assets/imgs/pro3.jpg';
function Item()
{
    return(
        <>
    <Container fluid className="pop">
        <Container>
            <Row>
                <Col md={6} className="pop2">
                    <Image src={img1} className="pop3" />
                </Col>

                <Col md={6} className="pop4">
                    <p className="pop41"> Home - Balls - Cricket ball </p>
                    <h1 className="pop42"> Cricket ball </h1> 
                    <p className="pop43"> Brand:CA Sports</p>
                    <h2 className="pop44"> $132.00 </h2>
                    <p className="pop45"> or 4 interest-free installments by Afterpay.</p>
                    <h2 className="pop47"> Rating </h2> 
                    <p className="pop48"> <i class="fa-solid fa-star"> </i> 
                        <i class="fa-solid fa-star"></i> 
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                     </p>
                    <Button variant="danger" className="pop46"> <i class="fa-solid fa-cart-shopping"></i> BUY NOW</Button>
                    <h2 className="pop49">Guaranteed safe checkout</h2>
                    <Image src={img2} className="pop441" />
                    <Image src={img3} className="pop442" />
                    <Image src={img4} className="pop443" />
                    <Image src={img5} className="pop444" />
                </Col>
            </Row>
{/* ================================================================================== */}
            <Row>
                <Col md={12} className="pop5">
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h3>Description</h3></Accordion.Header>
                            <Accordion.Body>
                                <p className="pop53"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header> <h3> Delivery Info</h3></Accordion.Header>
                            <Accordion.Body>
                               <p> Standard and Express delivery services are available for all items.
                                 <br/> <br/> Shipping costs are calculated at the checkout page (after delivery option & destination confirmation).
                                 <br/> <br/>  Tracking is available for all delivery options.
                                 <br/> <br/>   Items are delivered during standard business hours.
                                </p>
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header> <h3>Reviews (1) </h3></Accordion.Header>
                            <Accordion.Body>
                                <Col md={6}>
                                    <h2 className="62">Add a review</h2>
                                    <p className="63">Your email address will not be published. Required fields are marked *</p>
                                    <Form>
                                       <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label> <h4>Name</h4></Form.Label>
                                            <Form.Control type="text" placeholder="Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label> <h4>Email address</h4></Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="Save my name, email, and website in this browser for the next time I comment." />
                                        </Form.Group>
                                        <h4 className="pop65">Your rating *</h4>
                                        <p className="pop66"> <i class="fa-solid fa-star"> </i> 
                                            <i class="fa-solid fa-star"></i> 
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </p>
                                        <h4 className="pop67">Your review *</h4>
                                        <InputGroup>
                                             <Form.Control as="textarea" aria-label="With textarea" />
                                        </InputGroup>
                                        <Form.Group className="mb-3 pop68" id="formGridCheckbox">
                                            <Form.Check type="checkbox" label=" I agree that my submitted data is being collected and stored. *" />
                                        </Form.Group>
                                        <Button variant="danger" className="pop69"> SUBMIT </Button>
                                    </Form>
                                </Col>
                        
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>
            </Row>
            {/* ============================================================= */}

            <Row>
              <Col md={12}>
                <h1 className="pop7">Related products</h1>
              </Col>
            </Row>
            {/* ======================================================== */}

            <Row>
            <Col md={4} className="pop8">
                   <Card>
                      <Card.Img variant="top" src={img6} className="pop81" />
                        <Card.Body className="pop82">
                            <h3 className="pop83" >Protection set</h3>
                            <p className="pop84">$179.00 – $199.00</p>
                        </Card.Body>
                   </Card>
                </Col>

              <Col md={4} className="pop9">
                   <Card>
                      <Card.Img variant="top" src={img7} className="pop91" />
                        <Card.Body className="pop92">
                            <h3 className="pop93" >Protection set</h3>
                            <p className="pop94">$179.00 – $199.00</p>
                        </Card.Body>
                   </Card>
                </Col>

              <Col md={4} className="pop10">
                   <Card>
                      <Card.Img variant="top" src={img8} className="pop101" />
                        <Card.Body className="pop102">
                            <h3 className="pop103" >Protection set</h3>
                            <p className="pop104">$179.00 – $199.00</p>
                        </Card.Body>
                   </Card>
                </Col>
            </Row>

        </Container>

    </Container>

        </>
    )

}
export default Item;