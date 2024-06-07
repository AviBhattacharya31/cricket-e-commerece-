import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/Pages.css';
import img1 from'../Assets/imgs/keep.jpg';
import img2 from'../Assets/imgs/book1.jpg';
import img3 from'../Assets/imgs/book2.jpg';
import img4 from'../Assets/imgs/book3.jpg';
import img5 from'../Assets/imgs/cat.jpg';
import img6 from'../Assets/imgs/big1.jpg';
import img7 from'../Assets/imgs/big5.jpg';

function Pages()
{
    return(
        <>
         <Container fluid>
            <Row className="zip1">
                <Col md={12}>
                    <h1 className="zip2"> About Us </h1>
                    <p className="zip3"> HOME - ABOUT US </p>
                   
                </Col>
            </Row>
{/* ------------------------------keep------------------------------------ */}
            <Container>
                <Row>
                    <Col md={6}>
                        <h6 className="keep2"> WHAT WE DO </h6>
                        <h1 className="keep3"> We teach cricket for all skill levels </h1>
                        <p className="keep4"> Consectetur adipiscing elit, sed do eiusmod onsectetur adipiscing elit, sed do eiusm od tempor. </p>
                        <Image src={img1} className="keep41" roundedCircle />
                        
                    </Col>

                    <Col md={3}>
                       <p className="keep6"> <span className="keep61"> Q </span>uisque quis magna vitae quam ornare rhoncus. Cras felis risus, rutrum eget venenatis eget, sodales ut mi.
                                <br/> <br/>  Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor ut labore sed eiusm od ut eiusm. 
                       </p>
                    </Col>

                    <Col md={3}>
                        <p className="keep7" > Tempor ut consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do od eiusm  tempor ut labore. 
                            <br/> <br/>  Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor.
                        </p>
                        
                    </Col>
                </Row> 
              </Container>
                {/* -------------------------------book---------------------------------- */}
                <Container className="book">
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={img2} />
                                    <Card.Body>
                                        <h1> 01. Coaching  </h1>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                           <Card>
                                <Card.Img variant="top" src={img3} />
                                    <Card.Body>
                                       <h1> 02. Masterclasses </h1>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={img4} />
                                    <Card.Body>
                                       <h1> 03. Private lessons </h1>
                                    </Card.Body>
                            </Card>
                         </Col>
                    </Row>
               </Container>
      </Container>

 {/* ----------------------------cat---------------------------- */}
               <Container fluid className="cat">
                    <Row>
                        <Col md={12}>
                          <Image src={img5} className="cat1"/>  
                        </Col>
                    </Row>
               </Container>

 {/* ---------------------------------smile----------------------------------------- */}

 <Container fluid className="smile">
    <Container>
        <Row className="smile1">
            <Col md={6}>
                <h6 className="smile2"> COACHES </h6>
                <h1 className="smile3"> Meet our team </h1>
                <p className="smile4"> Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.  </p>
                <Button variant="danger" className="smile5">OUR SCHOOL</Button>
            </Col>
            <Col md={3} className="smile6">
                <Card className="bg-dark text-white">
                  <Card.Img src={img6} alt=" "/>
                    <Card.ImgOverlay>
                       <h1 className="smile61"> Bobby Brown  </h1>
                       <p className="smile62">  Coach  </p>
                    </Card.ImgOverlay>
                </Card>  
            </Col>
            <Col md={3} className="smile7">
               <Card className="bg-dark text-white">
                  <Card.Img src={img7} alt=" "/>
                     <Card.ImgOverlay>
                        <h1 className="smile71"> Carl Hopkinson </h1>
                        <p className="smile72">  Coach  </p>
                     </Card.ImgOverlay>
                </Card> 
                
            </Col>
        </Row>
        <Row className="smile8">

        </Row>

    </Container>



 </Container>
                       

        
        </>
    )

}
export default Pages;
