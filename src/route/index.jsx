import { createBrowserRouter } from "react-router-dom";
import { MainDashboard } from "../sections/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard />,
  },
]);

export default router;
