import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { Error } from "../pages";
import { Calculadoras } from "../pages/calculadoras";

import { calculadorasRoutes } from "./calculadoras";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  // Calculadoras
  {
    path: "/calculadoras",
    element: <Calculadoras />,
  },
  ...calculadorasRoutes,
]);

export default router;
