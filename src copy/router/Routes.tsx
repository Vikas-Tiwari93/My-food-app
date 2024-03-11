import { createBrowserRouter } from "react-router-dom";

import { Navigate } from "react-router-dom";
import CheckAuth from "../utils/checkAuth/CheckAuth";
import Homapage from "../pages/homepage/Homapage";
import Signup from "../pages/auth/signup/Signup";
import LoginPage from "../pages/auth/login/LoginPage";
import Auth from "../pages/auth/Auth";
import Profile from "../pages/homepage/profile/Profile";
import Chef from "../pages/homepage/chef/Chef";
import Ingredients from "../pages/homepage/chef/ingredients/Ingredients";
import Recepies from "../pages/homepage/chef/recepies/Recepies";
import RecepieList from "../pages/homepage/chef/recepies/list/RecepieList";
import RecepieDetails from "../pages/homepage/chef/recepies/details/RecepieDetails";
import RecepieAdd from "../pages/homepage/chef/recepies/add/RecepieAdd";

let routes = createBrowserRouter([
  {
    path: "/",

    element: <Navigate to="/homepage" />,
  },

  {
    path: "/auth",

    element: <Auth />,
    children: [
      {
        path: "signin",

        element: <LoginPage />,
        children: [],
      },
      {
        path: "signup",

        element: <Signup />,
        children: [],
      },
    ],
  },

  {
    path: "/homepage",

    element: (
      <CheckAuth>
        <Homapage />
      </CheckAuth>
    ),
    children: [
      {
        path: "profile",

        element: <Profile />,
        children: [
          {
            path: "recepies",

            element: <Signup />,
            children: [
              {
                path: "details",

                element: <Signup />,
                children: [],
              },
            ],
          },
        ],
      },
      {
        path: "chef",

        element: <Chef />,
        children: [
          {
            path: "recepies",

            element: <Recepies />,
            children: [
              {
                path: "list",

                element: <RecepieList/>,
                children: [],
              },
              {
                path: "details",

                element: <RecepieDetails />,
                children: [],
              },
              {
                path: "add",

                element: <RecepieAdd />,
                children: [],
              },
              {
                path: "edit",

                element: <RecepieAdd />,
                children: [],
              },
            ],
          },
          {
            path: "ingredients",

            element: <Ingredients />,
            children: [
              {
                path: "list",

                element: <Signup />,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <p> No such page exist</p>,
  },
]);

export default routes;
