import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../Assets/css/footer.css';
import img1 from'../Assets/imgs/new-logo.webp';
function Footer()
{
    return(
        <>
         <Container fluid className="f1">
          <Container> 
            <Row>
                <Col md={6} >
                   <img src={img1} className="d11"></img>
                     <h2 className="d12"> Newsletter Signup </h2>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Enter email" className="d121" />
                            </Form.Group>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="I agree to the Privacy Policy." />
                            </Form.Group>
                </Col>

                <Col md={6}>
                    <Row>
                        <h1 className="foot1"> We unite cricket fans from all over the globe </h1>
                    </Row>
                    <Row>
                        <Col md={4} className="foot2">
                            <h2 > Socials </h2>
                            <p className="foot22"> Facebook </p>
                            <p> Twitter </p>
                            <p> Dribble </p>
                            <p> Instagram </p>
                        </Col>
                        <Col md={4} className="foot3">
                            <h2 > Menu </h2>
                            <p className="foot32" > Home </p>
                            <p> About Us </p>
                            <p>  Our Team </p>
                            <p>  Shop</p>  
                        </Col>
                        <Col md={4}  className="foot4">
                            <h2 > Contacts </h2>
                            <p className="foot42">Say Hello</p>
                            <p>info@email.com</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="foot5">
                <Col md={12}>
                    <p> AxiomThemes © 2024. All rights reserved. </p>
                </Col>
            </Row>
          </Container>
      </Container>
        </>
    )

}
export default Footer;
