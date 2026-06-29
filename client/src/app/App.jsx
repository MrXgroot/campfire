import React from "react";
import Homepage from "./pages/home/Homepage";
import CommunityPage from "./pages/community/CommunityPage";
import AppLayout from "./layouts/AppLayout";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
