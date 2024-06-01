import React from "react";
import Vlad from "../../pages/FormAuf/FormAuf";
import { ARTEM_ROUTE, VLAD_ROUTE, OLEG_ROUTE, GENA_ROUTE, FORM_ROUTE } from "./config";
import Artem from "../../pages/ListUniversities/ListUniversities";
import { useRoutes } from "react-router-dom";
import Gena from "../../pages/TimeNow/TimeNow";
import Oleg from "../../pages/Calculator/Calculator";
import Form from "../../pages/FormPDF/FormPDF";

const MainRouter = () => {
  return useRoutes([
    { path: ARTEM_ROUTE, element: <Artem /> },
    { path: VLAD_ROUTE, element: <Vlad /> },
    { path: OLEG_ROUTE, element: <Oleg /> },
    { path: GENA_ROUTE, element: <Gena /> },
    { path: FORM_ROUTE, element: <Form /> },
  ]);
};

export default MainRouter;
