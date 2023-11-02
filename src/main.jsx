import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from 'react-router-dom';
import router from './Route/Route.jsx';
import AuthProvide, { AuthContext } from './Firebase/AuthProvider/AuthProvide.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvide>
         <RouterProvider router={router}></RouterProvider>
      </AuthProvide>
   </React.StrictMode>
);
