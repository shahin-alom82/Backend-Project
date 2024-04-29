import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Component/Home/Home"
import ErrorElement from "../ErrorElement/ErrorElement";
import CheckOut from "../CheckOut/CheckOut";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Bookings from "../Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AboutImg from "../AboutImg/AboutImg";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/bookings",
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
      },
      {
        path: "/aboutImg",
        element: <AboutImg></AboutImg>
      }

    ]
  },
]);
export default router;