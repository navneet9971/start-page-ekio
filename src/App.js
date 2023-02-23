import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/auth/Login";
import ErrorPage from "./component/errorPage";
import Sidebar from "./component/Sidebar";
import View from "./component/pages/View";
import Add from "./component/pages/Add";
import Review from "./component/pages/Review";
import Myaccount from "./component/pages/Myaccount";
import Download from "./component/pages/Download";
import Check from "./component/pages/Check";
import SignUP from "./component/auth/SignUP";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <SignUP />,
    },
    {
      path: "/dashboard",
      element: <Sidebar />,
      children: [
        {
          path: "/dashboard",
          element: <start />,
        },
        {
          path: "/dashboard/add",
          element: <Add />,
        },
        {
          path: "/dashboard/review",
          element: <Review />,
        },
        {
          path: "/dashboard/check",
          element: <Check />,
        },
        {
          path: "/dashboard/download",
          element: <Download />,
        },
        {
          path: "/dashboard/myaccount",
          element: <Myaccount />,
        },
        {
          path: "/dashboard/review",
          element: <Review />,
        },
        {
          path: "/dashboard/view",
          element: <View />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
