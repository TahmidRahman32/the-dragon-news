import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../pages/Home/Home/Home";


const router = createBrowserRouter([
   {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
         {
            path:  "/home",
            element: <Home></Home>
         }
      ]
   },
]);
 export default router;
