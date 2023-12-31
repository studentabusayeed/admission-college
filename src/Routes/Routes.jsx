import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import AdmissionForm from "../pages/AdmissionForm/AdmissionForm";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/shared/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/colleges',
                element: <Colleges></Colleges>
            },
            {
                path: '/admission',
                element: <Admission></Admission>
            },
            {
                path: '/myCollege',
                element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
                loader: () => fetch('/data.json/')
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/admission/:collegeName",
                element: <AdmissionForm></AdmissionForm>,
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            }
        ]
    }
]);