import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses/Courses";

  export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
          loader: () => fetch("http://localhost:5000/courses"),
        },
      ]
    },
  ]);