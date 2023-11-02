import React from "react";


import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../pages/shared/Header/Header";
import RightVav from "../../pages/shared/rightNav/RightVav";
import Footter from "../../pages/shared/Footter/Footter";



const NewsLayOut = () => {
   return (
      <div>
         <h3>news layout</h3>
         <Header></Header>
         <Container>
            <Row>
               
               <Col lg={9}>
                  <Outlet></Outlet>
               </Col>

               <Col lg={3}>
                  <RightVav></RightVav>
               </Col>
            </Row>
         </Container>

         <Outlet></Outlet>
         <Footter></Footter>
      </div>
   );
};

export default NewsLayOut;
