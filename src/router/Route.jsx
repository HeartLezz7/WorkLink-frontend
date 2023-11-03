import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/homepage/HomePage";
import FindWorkPage from "../pages/findworkpage/FindWorkPage";
import RegisterPage from "../pages/registerpage/RegisterPage";
import LoginPage from "../pages/loginpage/LoginPage";
import UserProfilePage from "../pages/userprofilepage/ProfilePage";
import UserDashBoardPage from "../pages/userdashboardpage/UserDashBoardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "findwork", element: <FindWorkPage /> },
      { path: "userprofile/:userProfileId", element: <UserProfilePage /> },
      { path: "dashboard", element: <UserDashBoardPage /> },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
