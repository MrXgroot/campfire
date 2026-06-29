import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import CommunityPage from "../pages/community/CommunityPage";
import HomePage from "../pages/home/Homepage";
import NotFound from "../pages/NotFound";
import AuthPage from "../pages/AuthPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "communities/:communitySlug",
        element: <CommunityPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

export default router;
