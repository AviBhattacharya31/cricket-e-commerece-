import {React, useState} from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/header.css';
import img1 from'../Assets/imgs/new-logo.webp';
import img2 from'../Assets/imgs/search.webp';


function Header({ name, ...props })
{ 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return(
        <>
        
                  <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="#"> <img src={img1}></img> </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  
                  <NavLink  className="d3 d2" to="/">Home</NavLink>
                  <NavLink  className="d3 mx-5" to="/pages" >Pages</NavLink>
                  <NavLink  className="d3" to="/sportpress" >Sportpress</NavLink>
                  <NavLink  className="d3 mx-5" to="/shop" >Shop</NavLink>
                  <NavLink  className="d3" to="/blog" >Blog</NavLink>
                  <NavLink  className="d3 mx-5" to="/login" >Login</NavLink>
                 <span className=" d3 d4"> <i className="fa-solid fa-cart-shopping"></i> </span>
                 <span  className="d3 d4 mx-5"> <i onClick={handleShow} className="fa-solid fa-magnifying-glass"></i> </span>
                </Nav>
                <span className="d5 mx-" to="" ><i class="fa-brands fa-facebook"></i> </span>
                <span className="d5 mx-3" to="" ><i class="fa-brands fa-twitter"></i> </span>
                <span className="d5" to="" ><i class="fa-brands fa-dribbble"></i>     </span>
                <span className="d5 mx-3" to="" ><i class="fa-brands fa-instagram"></i> </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>


<Offcanvas show={show} onHide={handleClose} placement="top" {...props}>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title> <Image src={img2} /> </Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    Some text as placeholder. In real life you can have the elements you
    have chosen. Like, text, images, lists, etc.
  </Offcanvas.Body>
</Offcanvas>


        </>
    )

}
export default Header;
