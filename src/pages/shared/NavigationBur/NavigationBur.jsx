import React from 'react';
import { Container } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useContext } from 'react';
import { AuthContext } from '../../../Firebase/AuthProvider/AuthProvide';


const NavigationBur = () => {

   const {user, logOut} = useContext(AuthContext)

   const handleLogOut = () =>{
      logOut(auth)
         .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
         })
         .catch((error) => {
            console.log(error.massage);
         });
   }
   return (
      <Container>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
               <Navbar.Brand href="#home" className="fs-2">
                  DRAGON NEWS
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto ">
                     <Link className="text-decoration-none text-black mx-2 mt-2" to="/category/0">
                        Home
                     </Link>
                     <Link className="text-decoration-none text-black mx-2 mt-2" to="">
                        About
                     </Link>
                     <Link className="text-decoration-none text-black mx-2 mt-2" to="">
                        Order
                     </Link>

                     <Nav.Link className="" href="#deets">
                        Login
                     </Nav.Link>
                  </Nav>
                  <Nav className="">
                     {user && <Nav.Link href="#pricing">{<FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>}</Nav.Link>}

                     {user ? 
                        <Button onClick={handleLogOut} variant="secondary">
                           SingOut
                        </Button>: 
                        <Link to="/login">
                           <Button variant="secondary">SignOut</Button>
                        </Link>
                     }
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </Container>
   );
};

export default NavigationBur;