import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/home.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import img2 from'../Assets/imgs/d1.jpg';
import img3 from'../Assets/imgs/spin1.webp';
import img4 from'../Assets/imgs/all.webp';
import img5 from'../Assets/imgs/spin2.webp';
import img6 from'../Assets/imgs/cri.webp';
import img7 from'../Assets/imgs/spin3.webp';
import img8 from'../Assets/imgs/stamp.webp';
import img9 from'../Assets/imgs/spin4.webp';
import img10 from'../Assets/imgs/eagle.webp';
import img11 from'../Assets/imgs/blu.webp';
import img12 from'../Assets/imgs/shark.webp';
import img13 from'../Assets/imgs/kan.webp';
import img14 from'../Assets/imgs/dur.webp';
import img15 from'../Assets/imgs/pan.webp';
import img16 from'../Assets/imgs/small1.jpg';
import img17 from'../Assets/imgs/big1.jpg';
import img18 from'../Assets/imgs/big2.jpg';
import img21 from'../Assets/imgs/big5.jpg';
function Home()
{
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
    
 
    return(
        <>
        {/* ------------------------page--------------------------------- */}
            <Card className="bg-dark text-white" style={{borderRadius:"0px"}}>
                <Card.Img src={img2} className="page1" alt="Card image" height={600} />
                <Card.ImgOverlay>
                  <Container fulid>
                    <Row>
                      <Col md={6}>
                        <h1 className="page2">  Get ready for the game of your life! </h1>
                        <p className="page3"> This championship is going to be broadcast on national TV! Stay tuned to watch the unforgettable battle of the champions. </p>
                        <Button variant="primary" className="page4">more information </Button>{' '}
                      </Col>
                      <Col md={6}>
                         <h1 className="page5">{ctime}</h1>
                      </Col>
                    </Row> 
                  </Container>
                </Card.ImgOverlay>
              </Card> 

{/* =---------------------------------raj--------------------------------------- */}

              <Container fluid  className="raj1">
                <Container>
                        <Row>
                            <Col md={4} className="raj2">
                                <div className="raj3">
                                  <Image src={img3} className="raj31" alt="" height={100}/>
                                </div>

                                <div className="raj4">
                                    <p className="raj41"> Aug 25, 2023 </p>
                                    <h1 className="raj42">130-115</h1>
                                    <p className="raj43">Premier League <br/> Bentleigh</p>     
                                </div>

                                <div className="raj5">
                                  <Image src={img4} className="raj51" alt="" height={100}/>
                                </div>
                            </Col>

                              {/* 0000000000      4        000000000 */}

                              <Col md={4} className="raj102">
                                <div className="raj103">
                                  <Image src={img5} className="raj131" alt="" height={100}/>
                                </div>

                                <div className="raj104">
                                    <p className="raj141"> Sep 22, 2023 </p>
                                    <h1 className="raj142">160-175</h1>
                                    <p className="raj143">Premier League <br/> Bentleigh</p>     
                                </div>

                                <div className="raj105">
                                  <Image src={img6} className="raj151" alt="" height={100}/>
                                </div>

                              </Col>

                              {/* 000000000000000000000  5 0000000000000000000 */}

                              
                              <Col md={4} className="raj202">
                                <div className="raj203">
                                  <Image src={img7} className="raj231" alt="" height={100}/>
                                </div>

                                <div className="raj204">
                                    <p className="raj241"> Oct 12, 2023 </p>
                                    <h1 className="raj242">230-215</h1>
                                    <p className="raj243">Premier League <br/> Bentleigh</p>     
                                </div>

                                <div className="raj205">
                                  <Image src={img8} className="raj251" alt="" height={100}/>
                                </div>

                              </Col>
                        </Row>
                </Container>
                
              </Container>
   {/* -------------------------------- deep------------------------------------------- */}
    <Container>
        <Row>
          <h5 className="deep2"> TABLE </h5>
          <h1 className="deep1"> Premier league </h1>
          <h3 className="deep"> Team standing </h3>
         <Table striped bordered hover>
            <thead>
              <tr>
                <th>Pos</th>
                <th>team</th>
                <th>E</th>
                <th>W</th>
                <th>L</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> <Image src={img9} className="" alt="" height={50}/>spin </td>
                <td>5</td>
                <td>4</td>
                <td>2</td>
                <td>6</td>
              </tr>
              <tr>
                <td>2</td>
                <td><Image src={img10} className="" alt="" height={50}/>eagle</td>
                <td>4</td>
                <td>3</td>
                <td>2</td>
                <td>5</td>
              </tr>
              <tr>
                <td>3</td>
                <td><Image src={img11} className="" alt="" height={50}/>Bluebirds</td>
                <td>2</td>
                <td>1</td>
                <td>0</td>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td>
                <td><Image src={img12} className="" alt="" height={50}/>Sharks</td>
                <td>4</td>
                <td>2</td>
                <td>3</td>
                <td>3</td>
              </tr>
               <tr>
                <td>5</td>
                <td><Image src={img13} className="" alt="" height={50}/>Kangaroos</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>0</td>
              </tr>
              <tr>
                <td>6</td>
                <td><Image src={img14} className="" alt="" height={50}/>Durham</td>
                <td>5</td>
                <td>3</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>7</td>
                <td><Image src={img15} className="" alt="" height={50}/>Punjab Kings</td>
                <td>0</td>
                <td>4</td>
                <td>3</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table> 
              <span className="deep4"> <Button variant="primary" className="">more information </Button>{' '}</span>
        </Row>
 </Container>


{/* -------------------------------------small----------------------------------------------- */}
<Container fluid className="small">
  <Container>
      <Row>
          <Col md={12} className="small4">
            <p className="small41"> LATEST REPORTS </p>
            <h1 className="small42"> Hottest blog stories </h1>
          </Col>
      </Row> 

      <Row className="small04">
          <Col md={6} className="small1">
            <Card className="small03">
              <Card.Img variant="top" src={img16} />
              <Card.Body>
                <h1 className="small01">The game is on! Watch the best highlights of the 2023 season </h1>
                <p className="small02">Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam. Sed…</p>
               
              </Card.Body>
            </Card>

          </Col>
          <Col md={6} className="small2">
              <Card className="small23">
                  <Card.Img variant="top" src={img16} />
                  <Card.Body>
                      <h1 className="small21">Australia vs Pakistan: what to expect in the semifinals? </h1>
                      <p className="small22"> Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam. Sed… </p>
                  
                  </Card.Body>
                </Card>

          </Col>
        
      </Row>
  </Container>
</Container>
{/* --------------------------------big----------------------------------------- */}
<Container fluid className="big">
  <Container>
      <Row className="big2">
          <Col md={12} className="big21">
            <h6 className="big22">TOP STORIES</h6>
            <h1 className="big23"> Latest news </h1>
          </Col>
      </Row> 

      <Row className="big3">
          <Col md={4} className="big4">
              <Card className="bg-dark text-white">
                  <Card.Img src={img17} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="big41"> TRENDING . Sep 20,2024 </p>
                    <h3 className="big42"> The desire to make it to the semifinals 2024  </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
          <Col md={4} className="big5">
              <Card className="bg-dark text-white">
                  <Card.Img src={img18} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="big51"> TRENDING . Sep 20,2024 </p>
                    <h3 className="big52"> New Zealand's teams compete against india </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
          <Col md={4} className="big6">
              <Card className="bg-dark text-white">
                  <Card.Img src={img21} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="big61"> TRENDING . Sep 20,2024 </p>
                    <h3 className="big62"> Saashind balls for best scores at teens league </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
      </Row>

      <Row className="big7">
          <Col md={4} className="big8">
              <Card className="bg-dark text-white">
                  <Card.Img src={img18} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="big81"> TRENDING . Sep 20,2024 </p>
                    <h3 className="big82"> Why did Australian cricket fans get mad? </h3>
                    
                  </Card.ImgOverlay>
              </Card>
          </Col>
          <Col md={4} className="big9">
              <Card className="bg-dark text-white">
                  <Card.Img src={img21} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="big91"> TRENDING . Sep 20,2024 </p>
                    <h3 className="big92"> goals that make games really memorable </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
          <Col md={4} className="big10">
              <Card className="bg-dark text-white">
                  <Card.Img src={img17} alt="Card image" />
                  <Card.ImgOverlay>
                    <p className="big101"> TRENDING . Sep 20,2024 </p>
                    <h3 className="big102"> Top 10 cricket teams to make it to the finals </h3>
                  </Card.ImgOverlay>
              </Card>
          </Col>
      </Row>


      <Row className="big11">
          <Col md={12} className="big111">
            <p className="big113"> <i class="fa-brands fa-telegram"></i></p>
             <h1 className="big112"> Get the best blog stories <br/> into your inbox! </h1>
          </Col>
      </Row>
      <Row>
          <Col md={12} className="big114">
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Form>
          </Col>
      </Row>
      <Row>
          <Col md={12} className="big115">     
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="I agree to the Privacy Policy." />
            </Form.Group>
          </Col>
      </Row>
  </Container>  
  
</Container>
                    
      
        </>
    )

}
export default Home;

