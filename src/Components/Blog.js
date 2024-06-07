import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/Blog.css';
import Button from 'react-bootstrap/Button';
import img1 from'../Assets/imgs/big1.jpg';
import img2 from'../Assets/imgs/big2.jpg';
import img3 from'../Assets/imgs/big5.jpg';
function Blog()
{
    return(
        <>
         <Container fluid className="ram">
            <Container>
                <Row className="ram2">
                    <Col md={12} className="ram21">
                        <h1 className="ram22"> Blog Portfolio</h1>
                        <h6 className="ram23"> HOME-ALL POSTS-BLOG PORTFOLIO </h6>
                    </Col>
                </Row> 
    
      <Row className="ram3">
          <Col md={4} className="ram4">
              <Card className="bg-dark text-white">
                  <Card.Img src={img1} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="ram41"> TRENDING . Sep 20,2024 </p>
                    <h3 className="ram42"> The desire to make it to the semifinals 2024  </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
          <Col md={4} className="ram5">
              <Card className="bg-dark text-white">
                  <Card.Img src={img2} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="ram51"> TRENDING . Sep 20,2024 </p>
                    <h3 className="ram52"> New Zealand's teams compete against india </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
          <Col md={4} className="ram6">
              <Card className="bg-dark text-white">
                  <Card.Img src={img3} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="ram61"> TRENDING . Sep 20,2024 </p>
                    <h3 className="ram62"> Saashind balls for best scores at teens league </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
      </Row>

      <Row className="ram7">
          <Col md={4} className="ram8">
              <Card className="bg-dark text-white">
                  <Card.Img src={img2} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="ram81"> TRENDING . Sep 20,2024 </p>
                    <h3 className="ram82"> Why did Australian cricket fans get mad? </h3>
                    
                  </Card.ImgOverlay>
              </Card>
          </Col>
          <Col md={4} className="ram9">
              <Card className="bg-dark text-white">
                  <Card.Img src={img3} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="ram91"> TRENDING . Sep 20,2024 </p>
                    <h3 className="ram92"> goals that make games really memorable </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
          <Col md={4} className="ram10">
              <Card className="bg-dark text-white">
                  <Card.Img src={img1} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="ram101"> TRENDING . Sep 20,2024 </p>
                    <h3 className="ram102"> Top 10 cricket teams to make it to the finals </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
      </Row>
{/* ------------------------vot---------------------------- */}

      <Row className="vot3">
          <Col md={4} className="vot4">
              <Card className="bg-dark text-white">
                  <Card.Img src={img3} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="vot41"> TRENDING . Sep 20,2024 </p>
                    <h3 className="vot42"> The desire to make it to the semifinals 2024  </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
          <Col md={4} className="vot5">
              <Card className="bg-dark text-white">
                  <Card.Img src={img1} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="vot51"> TRENDING . Sep 20,2024 </p>
                    <h3 className="vot52"> New Zealand's teams compete against india </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
          <Col md={4} className="vot6">
              <Card className="bg-dark text-white">
                  <Card.Img src={img2} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="vot61"> TRENDING . Sep 20,2024 </p>
                    <h3 className="vot62"> Saashind balls for best scores at teens league </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
      </Row>

      

  </Container>  
  
</Container>
        </>
    )

}
export default Blog;
