import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Update from "../Pages/Update";
import AddProductPrivet from "../PrivetRout/AddProductPrivet";
import MyCartPrivet from "../PrivetRout/MyCartPrivet";
import BrandDetails from "../Pages/BrandDetails";
import DetailsProduct from "../Pages/DetailsProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AddProduct",
        element: (
          <AddProductPrivet>
            <AddProducts></AddProducts>
          </AddProductPrivet>
        ),
      },
      {
        path: "/MyCart",
        element: (
          <MyCartPrivet>
            <MyCart></MyCart>
          </MyCartPrivet>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/brandDetails/:id",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/detailsProduct/:id",
        element: <DetailsProduct></DetailsProduct>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default router;
