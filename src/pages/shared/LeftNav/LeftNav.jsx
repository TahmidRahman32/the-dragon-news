import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";


const LeftNav = () => {
   const [categories , setCategories] = useState([]);

   useEffect(() =>{
      fetch("http://localhost:5000/categories")
         .then((res) => res.json())
         .then((data) => setCategories(data))
         .catch((error) => console.log(error));
   },[])
   return (
      <div>
         <h3>All Category</h3>
         {categories.map((category) => (
            <p key={category.id}>
               <Link to={`/category/ ${category.id}`} className="text-black text-decoration-none">
                  {category.name}
               </Link>
            </p>
         ))}
         <div>
            <Row xs={1} md={2} lg={1} className="g-4 my-4 d-flex w-full">
               <Col>
                  <Card>
                     <Card.Img variant="top" src={first} />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text> This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col>
                  <Card>
                     <Card.Img variant="top" src={second} />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text> This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col>
                  <Card>
                     <Card.Img variant="top" src={third} />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text> This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default LeftNav;