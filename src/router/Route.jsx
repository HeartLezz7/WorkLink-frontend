import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/homepage/HomePage";
import FindWorkPage from "../pages/findworkpage/FindWorkPage";
import RegisterPage from "../pages/registerpage/RegisterPage";
import LoginPage from "../pages/loginpage/LoginPage";
import UserProfilePage from "../pages/userprofilepage/ProfilePage";
import ValidatePage from "../pages/validatepage/ValidatePage";
import ChatPage from "../pages/chat/ChatPage";
import ChatContextProvider from "../contexts/ChatContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "findwork", element: <FindWorkPage /> },
      { path: "userProfile/:userProfileId", element: <UserProfilePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      {
        path: "/chatroom",
        element: (
          <ChatContextProvider>
            <ChatPage />
          </ChatContextProvider>
        ),
      },
    ],
  },

  {
    path: "/validate/:userId",
    element: <ValidatePage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
