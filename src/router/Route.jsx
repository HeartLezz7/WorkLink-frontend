import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/homepage/HomePage";
import RegisterForm from "../pages/registerpage/RegisterForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/register", element: <RegisterForm /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
