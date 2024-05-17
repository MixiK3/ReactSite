import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Vlad from "../../pages/FormAuf/FormAuf";
import Artem from "../../pages/ListUniversities/ListUniversities";
import Oleg from "../../pages/Calculator/Calculator";
import Gena from "../../pages/TimeNow/TimeNow";
import Form from "../../pages/FormPDF/FormPDF";
import { ARTEM_ROUTE, GENA_ROUTE, VLAD_ROUTE, FORM_ROUTE } from "./config";

const MainRouter = ({ isAuth = false }) => {
  return (
    <Routes>
      <Route path={ARTEM_ROUTE} element={<Artem />} />
      <Route path={VLAD_ROUTE} element={<Vlad />} />
      <Route path={FORM_ROUTE} element={<Form />} />
      {isAuth && <Route path={GENA_ROUTE} element={<Gena />} />}
      {isAuth && <Route path="/private" element={<Oleg />} />} {/* Приватный маршрут */}
      {!isAuth && <Navigate to="/login" />}{" "}
    </Routes>
  );
};

export default MainRouter;
