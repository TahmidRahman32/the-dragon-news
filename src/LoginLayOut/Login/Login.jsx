import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavigationBur from "../../pages/shared/NavigationBur/NavigationBur";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvide";

const Login = () => {
   const { login} = useContext(AuthContext);
   const navigate = useNavigate();

   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      navigate('/category/0')

      login(email, password)
         .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
         })
         .catch((error) => {
            console.log(error.massage);
         });
   };


   return (
      <div>
         <NavigationBur></NavigationBur>
         <Container className="d-flex justify-content-center">
            <Form onSubmit={handleLogin} className="mt-5 p-5 w-50 mx-auto">
               <h1 className="mx-auto fw-bolder mb-4">Please Login!!</h1>
               <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control className="w-75 mb-4 p-3" type="email" name="email" placeholder="Enter email" required />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control className="w-75 mb-4 p-3" type="password" name="password" placeholder="Password" required />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
               </Form.Group>
               <Button variant="primary" type="submit " size="lg">
                  Login!
               </Button>
               <br />
               <Form.Text className="secondary ">
                  <Link className="text-decoration-none fs-5 " to="/register">
                     you have in account Register
                  </Link>
               </Form.Text>
               <Form.Text className="text-muted"></Form.Text>
               <Form.Text className="text-muted"></Form.Text>
            </Form>
         </Container>
      </div>
   );
};

export default Login;
