import React from "react";
import Artem from "./pages/ListUniversities/ListUniversities";
import Vlad from "./pages/FormAuf/FormAuf";
import { ARTEM_ROUTE, GENA_ROUTE, OLEG_ROUTE, VLAD_ROUTE, FORM_ROUTE } from "./App/routing/config";
import { useRoutes } from "react-router-dom";
import Oleg from "./pages/Calculator/Calculator";
import Gena from "./pages/TimeNow/TimeNow";
import Form from "./pages/FormPDF/FormPDF";

const MainRouter = () => {
  return useRoutes([
    { path: ARTEM_ROUTE, element: <Artem /> },
    {
      path: VLAD_ROUTE,
      element: <Vlad />,
    },
    { path: OLEG_ROUTE, element: <Oleg /> },
    { path: GENA_ROUTE, element: <Gena /> },
    { path: FORM_ROUTE, element: <Form /> },
  ]);
};

export default MainRouter;
