import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footter from '../pages/shared/Footter/Footter';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightVav from '../pages/shared/rightNav/RightVav';
import NavigationBur from '../pages/shared/NavigationBur/NavigationBur';

const LayOut = () => {
   return (
      <div>
         <Header></Header>
         <NavigationBur></NavigationBur>
         <Container>
            <Row>
               <Col lg={3}>
                 <LeftNav></LeftNav>
               </Col>
               <Col lg={6}>
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

export default LayOut;