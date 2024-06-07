import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/Sportpress.css';
import img1 from'../Assets/imgs/taru1.webp';
import img2 from'../Assets/imgs/spin1.webp';
import img3 from'../Assets/imgs/all.webp';
function Sportpress()
{
    return(
        <>
        <Container fluid className="taru">
            <Row>
                <Col md={12} className="taru11">
                    <h1 className="taru12"> Spin  </h1>
                    <p className="taru13"> HOME - PREMIER LEAGUE - SPIN </p>
                </Col>
            </Row>
          </Container>

          {/* ---------------------------------------------------------------- */}
        <Container fluid className="taru0">
             <Container className="taru2">
                <Row>
                     <Col md={3} className="taru21">
                        <Image src={img1} className="taru22" />
                     </Col>
                     <Col md={9} className="taru23">
                       <h2 className="taru24">One of the top cricket clubs in the world</h2> 
                       <p className="taru25"> With a roster of young and talented spinners, “Spin” has become a force to be reckoned with in the world of cricket,
                          consistently taking wickets and confounding opposing batsmen. The team’s captain, Aiden Foster, is renowned for his strategic brilliance 
                          in utilizing spin bowlers to outwit the opposition and secure victories. “Spin” has a loyal fan base that eagerly anticipates their matches, 
                          knowing that they can expect thrilling spin-bowling performances and exciting cricket moments.
                          <br/> <br/>
                          In recent years, “Spin” has won numerous championships, establishing itself as one of the dominant cricket teams in the league,
                          and their spinners continue to be the talk of the cricketing world. 
                        </p>
                     </Col>
               </Row>
{/* ====================================================== */}
                <Row className="kkr">
                   <Col md={12}>
                      
                    </Col>  
                </Row>

                <Row className="kkr1">
                   <Col md={12}>
                       <h3 className="kkr2"> Results </h3>
                    </Col>    
                </Row>
{/* =====================kkr3=================== */}
                <Row className="kkr3">
                    <Col md={12} className="taru3">
                        <div className="taru31">
                            <Image src={img2} className="taru32" alt="" height={100}/>
                        </div>

                        <div className="taru33">
                            <p className="taru34"> Aug 25, 2023 </p>
                            <h1 className="taru35">130-115</h1>
                            <p className="taru36">Premier League <br/> Bentleigh</p>     
                        </div>

                        <div className="taru37">
                            <Image src={img3} className="taru38" alt="" height={100}/>
                        </div>
                    </Col>
                </Row> 
{/* ===================kk4===================== */}
                <Row className="kkr4">
                    <Col md={12} className="taru4">
                        <div className="taru41">
                            <Image src={img2} className="taru42" alt="" height={100}/>
                        </div>

                        <div className="taru43">
                            <p className="taru44"> Aug 25, 2023 </p>
                            <h1 className="taru45">145-133</h1>
                            <p className="taru46">Premier League <br/> Bentleigh</p>     
                        </div>

                        <div className="taru47">
                            <Image src={img3} className="taru48" alt="" height={100}/>
                        </div>
                    </Col>
                </Row> 
{/* =======================kk5=================== */}
                <Row className="kkr5">
                    <Col md={12} className="taru5">
                        <div className="taru51">
                            <Image src={img2} className="taru52" alt="" height={100}/>
                        </div>

                        <div className="taru53">
                            <p className="taru54"> Aug 25, 2023 </p>
                            <h1 className="taru55">100-118</h1>
                            <p className="taru56">Premier League <br/> Bentleigh</p>     
                        </div>

                        <div className="taru57">
                            <Image src={img3} className="taru58" alt="" height={100}/>
                        </div>
                    </Col>
                </Row> 
{/* =======================kk6======================= */}
                <Row className="kkr6">
                    <Col md={12} className="taru6">
                        <div className="taru61">
                            <Image src={img2} className="taru62" alt="" height={100}/>
                        </div>

                        <div className="taru63">
                            <p className="taru64"> Aug 25, 2023 </p>
                            <h1 className="taru65">170-149</h1>
                            <p className="taru66">Premier League <br/>Bentleigh</p>     
                        </div>

                        <div className="taru67">
                            <Image src={img3} className="taru68" alt="" height={100}/>
                        </div>
                    </Col>
                </Row> 


             </Container>


        </Container>


        </>
    )

}
export default Sportpress;
