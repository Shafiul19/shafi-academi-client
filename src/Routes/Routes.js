import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses/Courses";
import CourseDetail from "../pages/Courses/CourseDetail/CourseDetail";
import Checkout from "../pages/Courses/Checkout/Checkout";
import Blog from "../pages/Blog/Blog";

  export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/courses"),
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
          loader: () => fetch("http://localhost:5000/courses"),
        },
        {
          path: "/course/:id",
          element: <CourseDetail></CourseDetail>,
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
        },
        {
          path: "/checkout/:id",
          element: <Checkout></Checkout>,
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
        },
        {
          path: "/blog",
          element: <Blog></Blog>
          
        },
      ]
    },
  ]);