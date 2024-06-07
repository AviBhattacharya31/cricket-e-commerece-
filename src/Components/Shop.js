import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/Shop.css';
import img1 from'../Assets/imgs/shop1.jpg';
import img2 from'../Assets/imgs/shop2.jpg';
import img3 from'../Assets/imgs/shop3.jpg';
import img4 from'../Assets/imgs/shop4.jpg';
import img5 from'../Assets/imgs/shop5.jpg';
import img6 from'../Assets/imgs/shop6.jpg';
import img7 from'../Assets/imgs/shop7.jpg';
import img8 from'../Assets/imgs/shop8.jpg';
import img9 from'../Assets/imgs/shop9.jpg';
import img10 from'../Assets/imgs/shop10.jpg';
import img11 from'../Assets/imgs/shop11.jpg';
import img12 from'../Assets/imgs/shop12.jpg';
function Shop()
{
    return(
        <>
          <Container fluid className="main">
            <Row>
                <Col md={12} className="main1">
                    <h1 className="main2"> Shop  </h1>
                    <p className="main3"> HOME - SHOP </p>
                </Col>
            </Row>
          </Container>
{/* --------------------------kk-------------------------------- */}

    <Container fluid className="kk">
        <Container>
            <Row>
                <Col md={3} className="kk1">
                  <NavLink  className="d3 text-white" to="/item" >   
                    <Card>
                        <Card.Img variant="top" src={img1} className="kk11" />
                            <Card.ImgOverlay>
                                <i className="fa-solid fa-heart kk12"></i>
                            </Card.ImgOverlay>
                            <Card.Body className="kk13">
                                <h3 className="kk14" >Cricket bail</h3>
                                <p className="kk15">$59.00  </p>
                            </Card.Body>
                    </Card>
                    </NavLink>
                </Col>

                <Col md={3} className="kk2">
                   <Card>
                      <Card.Img variant="top" src={img2} className="kk21" />
                         <Card.ImgOverlay>
                             <i className="fa-solid fa-heart kk22"></i>
                         </Card.ImgOverlay>
                        <Card.Body className="kk23">
                            <h3 className="kk24" >Batting glove</h3>
                            <p className="kk25">$79.00 – $99.00</p>
                        </Card.Body>
                   </Card>
                </Col>

                <Col md={3} className="kk3">
                   <Card>
                      <Card.Img variant="top" src={img3} className="kk31"/>
                         <Card.ImgOverlay>
                             <i className="fa-solid fa-heart kk32"></i>
                         </Card.ImgOverlay>
                        <Card.Body className="kk33">
                            <h3 className="kk34" >Cricket helmet </h3>
                            <p className="kk35">$129.00</p>
                        </Card.Body>
                   </Card>
                </Col>
                <Col md={3} className="kk4">
                   <Card>
                      <Card.Img variant="top" src={img4} className="kk41" />
                         <Card.ImgOverlay>
                             <i className="fa-solid fa-heart kk42"></i>
                         </Card.ImgOverlay>
                        <Card.Body className="kk43">
                            <h3 className="kk44" >Cricket bat</h3>
                            <p className="kk45">$99.00</p>
                        </Card.Body>
                   </Card>
                </Col>
            </Row>

            {/* ========================rr===================== */}

            <Row>
                <Col md={3} className="rr1"> 
                    <Card>
                        <Card.Img variant="top" src={img5} className="rr11" />
                            <Card.ImgOverlay>
                                <i className="fa-solid fa-heart rr12"></i>
                            </Card.ImgOverlay>
                            <Card.Body className="rr13">
                                <h3 className="rr14" >Cricket bails</h3>
                                <p className="rr15">$59.00  </p>
                            </Card.Body>
                    </Card>
                </Col>

                <Col md={3} className="rr2">
                   <Card>
                      <Card.Img variant="top" src={img6} className="rr21" />
                         <Card.ImgOverlay>
                             <i className="fa-solid fa-heart rr22"></i>
                         </Card.ImgOverlay>
                        <Card.Body className="rr23">
                            <h3 className="rr24" >Leg pads</h3>
                            <p className="rr25"> $99.00</p>
                        </Card.Body>
                   </Card>
                </Col>

                <Col md={3} className="rr3">
                   <Card>
                      <Card.Img variant="top" src={img7} className="rr31"/>
                         <Card.ImgOverlay>
                             <i className="fa-solid fa-heart rr32"></i>
                         </Card.ImgOverlay>
                        <Card.Body className="rr33">
                            <h3 className="rr34" >Gricket gloves </h3>
                            <p className="rr35">$59.00 – $79.00</p>
                        </Card.Body>
                   </Card>
                </Col>
                <Col md={3} className="rr4">
                   <Card>
                      <Card.Img variant="top" src={img8} className="rr41" />
                         <Card.ImgOverlay>
                             <i className="fa-solid fa-heart rr42"></i>
                         </Card.ImgOverlay>
                        <Card.Body className="rr43">
                            <h3 className="rr44" >Blue helmet</h3>
                            <p className="rr45">$119.00 $99.00</p>
                        </Card.Body>
                   </Card>
                </Col>
            </Row>

            {/* ---------------------------------cc------------------------------- */}
            <Row>
                <Col md={3} className="cc1">  
                    <Card>
                        <Card.Img variant="top" src={img9} className="cc11" />
                            <Card.ImgOverlay>
                                <i className="fa-solid fa-heart cc12"></i>
                            </Card.ImgOverlay>
                            <Card.Body className="cc13">
                                <h3 className="cc14" >Bats and ball</h3>
                                <p className="cc15">$299.00  </p>
                            </Card.Body>
                    </Card>
                </Col>

                <Col md={3} className="cc2">
                   <Card>
                      <Card.Img variant="top" src={img10} className="cc21" />
                         <Card.ImgOverlay>
                             <i className="fa-solid fa-heart cc22"></i>
                         </Card.ImgOverlay>
                        <Card.Body className="cc23">
                            <h3 className="cc24" >Protection set</h3>
                            <p className="cc25">$179.00 – $199.00</p>
                        </Card.Body>
                   </Card>
                </Col>

                <Col md={3} className="cc3">
                   <Card>
                      <Card.Img variant="top" src={img11} className="cc31"/>
                         <Card.ImgOverlay>
                             <i className="fa-solid fa-heart cc32"></i>
                         </Card.ImgOverlay>
                        <Card.Body className="cc33">
                            <h3 className="cc34" >A pair of gloves</h3>
                            <p className="cc35">$99.00</p>
                        </Card.Body>
                   </Card>
                </Col>
                <Col md={3} className="cc4">
                   <Card>
                      <Card.Img variant="top" src={img12} className="cc41" />
                         <Card.ImgOverlay>
                             <i className="fa-solid fa-heart cc42"></i>
                         </Card.ImgOverlay>
                        <Card.Body className="cc43">
                            <h3 className="cc44" >Professional bat</h3>
                            <p className="cc45">$89.00</p>
                        </Card.Body>
                   </Card>
                </Col>
            </Row>
              <Col md={12}>
                 <Button variant="danger" className="cc5">Read More</Button>
              </Col>
            <Row>

            </Row>


        </Container>  

    </Container>

        </>
    )

}
export default Shop;
