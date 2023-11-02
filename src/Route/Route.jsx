import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/cetagory/Category";
import NewsLayOut from "../LayOut/news/NewsLayOut";
import News from "../LayOut/news/News";
import LoginLayout from "../LoginLayOut/LoginLayout/LoginLayout";
import Register from "../LoginLayOut/Register/Register";
import Login from "../LoginLayOut/Login/Login";


const router = createBrowserRouter([
   {
      path: '/',
      element: <LoginLayout></LoginLayout>,
      children:[
         {
            path: '/',
            element: <Navigate to="/category/0"></Navigate>
         },
         {
            path: 'register',
            element: <Register></Register>
         },
         {
            path: 'login',
            element: <Login></Login>
         }
      ]
   },
   {

      path: "category",
      element: <LayOut></LayOut>,
      children: [
         // {
         //    path: "/home",
         //    element: <Category></Category>,
         //    loader: () => fetch(`http://localhost:5000/news`),
         // },
         {
            path: ":id",
            element: <Category></Category>,
            loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`),
         },
         {
            path: "news",
            element: <NewsLayOut></NewsLayOut>,
         },
         {
            path: ":id",
            element: <News></News>,
            loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
         },
      ],
   },
]);
 export default router;
