import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/homepage/HomePage";
import FindWorkPage from "../pages/findworkpage/FindWorkPage";
import RegisterPage from "../pages/registerpage/RegisterPage";
import LoginPage from "../pages/loginpage/LoginPage";
import UserProfilePage from "../pages/userprofilepage/ProfilePage";
import UserDashBoardPage from "../pages/userdashboardpage/UserDashBoardPage";
import ValidatePage from "../pages/validatepage/ValidatePage";
import ChatPage from "../pages/chat/ChatPage";
import RedirectIfNotLogin from "./redirect/RedirectIfNotLogin";
import RedirectIfLogin from "./redirect/RedirectIfLogin";
import AdminPage from "../pages/adminpage/AdminPage";
import LayoutAdmin from "../layout/LayoutAdmit";
import ChatContent from "../pages/chat/ChatContent";
import ChatContextProvider from "../contexts/ChatContext";

import AdminManageUser from "../pages/adminpage/AdminManageUser";
import AdminManageTransction from "../pages/adminpage/AdminManageTransction";
import AdminLoginPage from "../pages/loginpage/AdminLogin";
import AdminRegisterPage from "../pages/registerpage/AdminRegister";
import WalletContextProvider from "../contexts/WalletContext";

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
          <WalletContextProvider>
            <RedirectIfNotLogin>
              <UserDashBoardPage />
            </RedirectIfNotLogin>
          </WalletContextProvider>
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
      {
        path: "/chatroom",
        element: (
          <ChatContextProvider>
            <ChatPage />
          </ChatContextProvider>
        ),
        children: [
          {
            path: "/chatroom/:chatRoomId",
            element: (
              <ChatContextProvider>
                <ChatContent />
              </ChatContextProvider>
            ),
          },
        ],
      },
    ],
  },
  { path: "/loveworklink" },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      { path: "", element: <AdminPage /> },
      { path: "manageuser", element: <AdminManageUser /> },
      { path: "managetransection", element: <AdminManageTransction /> },
    ],
  },
  { path: "adminlogin", element: <AdminLoginPage /> },
  { path: "adminregister", element: <AdminRegisterPage /> },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
