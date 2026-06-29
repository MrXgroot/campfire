import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import CommunityPage from "../pages/community/CommunityPage";
import HomePage from "../pages/home/Homepage";
import NotFound from "../pages/NotFound";
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
]);

export default router;
