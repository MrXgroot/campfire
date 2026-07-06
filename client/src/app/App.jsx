import { RouterProvider } from "react-router-dom";
import router from "./router/router-v2";
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
