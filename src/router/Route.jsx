import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/homepage/HomePage";
import FindWorkPage from "../pages/findworkpage/FindWorkPage";
import RegisterPage from "../pages/registerpage/RegisterPage";
import LoginPage from "../pages/loginpage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "findwork", element: <FindWorkPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
