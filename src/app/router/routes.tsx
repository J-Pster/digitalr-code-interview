import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { Error } from "../pages";
import { Calculadoras, LatasDeTinta } from "../pages/calculadoras";

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
  {
    path: "/calculadoras/latas-de-tinta",
    element: <LatasDeTinta />,
  },
]);

export default router;
