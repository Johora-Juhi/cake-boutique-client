import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Update from "../../Pages/MyReviews/Update";
import Services from "../../Pages/Services/Services";
import ReviewSection from "../../Shared/ServiceShare/ReviewSection/ReviewSection";
import ServiceDetails from "../../Shared/ServiceShare/ServiceSection/ServiceDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/reviews',
                element: <ReviewSection></ReviewSection>
            },
            {
                path: '/addServices',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`http://localhost:5000/myReviews/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
]);