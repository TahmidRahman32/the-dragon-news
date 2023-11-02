import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Firebase/AuthProvider/AuthProvide';

const Register = () => {
   const { createUser } = useContext(AuthContext);

   const handleRegister = (event) =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;

      console.log(email, password,name, photo);

      createUser(email, password)
         .then((result) => {
          
            const createdUser = result.user;
            console.log(createdUser)
         })
         .catch((error) => {
           console.log(error.message) 
           
         });

   }
   return (
      <div>
         <Container className="d-flex justify-content-center">
            <Form onSubmit={handleRegister} className="mt-5 p-5 w-50 mx-auto">
               <h1 className="mx-auto fw-bolder mb-4">Please Register!!</h1>
               <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control className="w-75 mb-4 p-3" type="text" name="name" placeholder="Enter Name" required />
               </Form.Group>
               <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control className="w-75 mb-4 p-3" type="email" name="email" placeholder="Enter email" required />
               </Form.Group>
               <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control className="w-75 mb-4 p-3" type="text" name="photo" placeholder="Enter Photo " required />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control className="w-75 mb-4 p-3" type="password" name="password" placeholder="Password" required />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
               </Form.Group>
               <Button variant="primary" size="lg " type="submit">
                  Register!
               </Button>
               <br />
               <Form.Text className="secondary ">
                  <Link className="text-decoration-none fs-5 " to="/login">
                     already your a account
                  </Link>
               </Form.Text>
               <Form.Text className="text-muted"></Form.Text>
               <Form.Text className="text-muted"></Form.Text>
            </Form>
         </Container>
      </div>
   );
};

export default Register;