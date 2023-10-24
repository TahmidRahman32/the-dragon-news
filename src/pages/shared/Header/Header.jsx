import React from "react";
import logo from "../../../assets/logo.png";
import img from "../../../assets/user.png";
import moment from "moment/moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
   return (
      <Container>
         <div className="text-center">
            <img src={logo} alt="" />
            <p className="text-secondary">
               <small>Journalism Without Fear or Favour</small>
            </p>
            <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
         </div>
         <div className="d-flex">
            <Button variant="danger">latest</Button>
            <Marquee speed={100}>I can be a React component, multiple React components, or just some text......... I can be a React component, multiple React components, or just some text.........</Marquee>
         </div>

         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
               <Navbar.Brand href="#home" className="fs-2">
                  DRAGON NEWS
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">
                     <Nav.Link href="#features">Features</Nav.Link>
                     <Nav.Link href="#pricing">Pricing</Nav.Link>
                     <Nav.Link href="#pricing">Profile</Nav.Link>
                     <Nav.Link className="  " href="#deets">
                        Login
                     </Nav.Link>
                  </Nav>
                  <Nav className="">
                     

                     <Nav.Link eventKey={2} href="#memes">
                        <img className="w-25" src={img} alt="" />
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </Container>
   );
};

export default Header;
