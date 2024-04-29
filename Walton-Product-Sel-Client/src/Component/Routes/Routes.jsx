import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import MyProduct from "../MyProduct/MyProduct";
import Update from "../Update/Update";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PraivateRoute/PraivateRoute";
import ErrorElement from "../ErrorElement/ErrorElement";
// import Details from "../Details/Details";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/product"),
            },
            {
                path: "/AddProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: "/myProduct",
                element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/addProduct"),
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/addProduct/${params.id}`),
            },
            {
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/ragistation",
                element: <Register></Register>

            }
        ]
    },
]);

export default router