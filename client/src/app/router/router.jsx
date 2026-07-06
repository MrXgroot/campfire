import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import HomePage from "../pages/home/HomePage";
import CommunityPage from "../pages/community/CommunityPage";
import CampPage from "../pages/CampPage";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
