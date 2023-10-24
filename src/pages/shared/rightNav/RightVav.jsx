import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter,} from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightVav = () => {
   return (
      <div>
         <h3>Login With</h3>
         <Button className="mb-2" variant="outline-primary">
            <FaGoogle />
            Login with Google
         </Button>
         <Button className="mb-4" variant="outline-secondary">
            <FaGithub />
            Login with GitHub
         </Button>

         <div className="mb-4">
            <ListGroup>
               <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
               <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
               <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
               
            </ListGroup>
         </div>
         <QZone></QZone>
         <div>
            <img src={bg} alt="" />
         </div>
      </div>
   );
};

export default RightVav;