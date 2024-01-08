import React from 'react'

import { Link } from 'react-router-dom'
import {
  ARTEM_ROUTE,
  OLEG_ROUTE,
  VLAD_ROUTE,
  GENA_ROUTE,
} from '../../App/routing/config'

export interface StyledProps {
  ArtemHeight?: string
}

const Navbar = ({
  setIsAuth,
  isAuth,
}: {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  isAuth: boolean
}) => {
  const handleAuth = () => {
    setIsAuth(!isAuth) // изменяем значение авторизации через переданную функцию setIsAuth
  }
  return (
    <nav className="navbar">
      {/* Ссылки для навигации */}
      <Link to={ARTEM_ROUTE}>ARTEM_TABLE</Link>

      <Link to={VLAD_ROUTE}>VLAD_FORM</Link>

      <Link to={OLEG_ROUTE}>OLEG_CALCULATE</Link>

      <Link to={GENA_ROUTE}>GENA_TIME</Link>

      {/* Кнопка для авторизации */}
      <button onClick={handleAuth}>{isAuth ? 'Выйти' : 'Войти'}</button>
    </nav>
  )
}

export default Navbar
