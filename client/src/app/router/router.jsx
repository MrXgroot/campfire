import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import CommunityPage from "../pages/community/CommunityPage";
import HomePage from "../pages/home/Homepage";
import NotFound from "../pages/NotFound";
import AuthPage from "../pages/AuthPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import CreateCommunity from "../pages/community/CreateCommunityPage";
import ProtectedRoute from "./ProtectedRoute";
import CampPage from "../pages/CampPage";
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
        path: "communities/:communitySlug/camps/:campSlug",
        element: <CampPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "communities/create",
            element: <CreateCommunity />,
          },
        ],
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
