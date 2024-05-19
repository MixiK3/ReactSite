import React from "react";

import { Link } from "react-router-dom";
import { ARTEM_ROUTE, OLEG_ROUTE, VLAD_ROUTE, GENA_ROUTE, FORM_ROUTE } from "../../App/routing/config";

export interface StyledProps {
  ArtemHeight?: string;
}

const Navbar = ({
  setIsAuth,
  isAuth,
}: {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isAuth: boolean;
}) => {
  const handleAuth = () => {
    setIsAuth(!isAuth); // изменяем значение авторизации через переданную функцию setIsAuth
  };
  return (
    <nav className="navbar">
      {/* Ссылки для навигации */}
      <Link to={ARTEM_ROUTE}>ListUniversities</Link>

      <Link to={VLAD_ROUTE}>FormAuf</Link>

      <Link to={OLEG_ROUTE}>Calculator</Link>

      <Link to={GENA_ROUTE}>TimeNow</Link>
      <Link to={FORM_ROUTE}>FormPDF</Link>

      {/* Кнопка для авторизации */}
      <button onClick={handleAuth}>{isAuth ? "Выйти" : "Войти"}</button>
    </nav>
  );
};

export default Navbar;
