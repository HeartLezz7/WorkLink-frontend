import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/homepage/HomePage";
import FindWorkPage from "../pages/findworkpage/FindWorkPage";
import RegisterPage from "../pages/registerpage/RegisterPage";
import LoginPage from "../pages/loginpage/LoginPage";
import UserProfilePage from "../pages/userprofilepage/ProfilePage";
import UserDashBoardPage from "../pages/userdashboardpage/UserDashBoardPage";
import ValidatePage from "../pages/validatepage/ValidatePage";
import RedirectIfNotVerify from "./redirect/RedirectIfNotLogin";
import RedirectIfUser from "./redirect/RedirectIfLogin";
import RedirectIfNotLogin from "./redirect/RedirectIfNotLogin";
import RedirectIfLogin from "./redirect/RedirectIfLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "findwork", element: <FindWorkPage /> },
      {
        path: "userprofile/:userId",
        element: (
          <RedirectIfNotLogin>
            <UserProfilePage />
          </RedirectIfNotLogin>
        ),
      },
      {
        path: "dashboard",
        element: (
          <RedirectIfNotLogin>
            <UserDashBoardPage />
          </RedirectIfNotLogin>
        ),
      },
      {
        path: "login",
        element: (
          <RedirectIfLogin>
            <LoginPage />
          </RedirectIfLogin>
        ),
      },
      {
        path: "register",
        element: (
          <RedirectIfLogin>
            <RegisterPage />
          </RedirectIfLogin>
        ),
      },
      {
        path: "/validate/:userId",
        element: (
          <RedirectIfNotLogin>
            <ValidatePage />
          </RedirectIfNotLogin>
        ),
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
