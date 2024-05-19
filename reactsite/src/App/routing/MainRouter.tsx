import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Vlad from '../../pages/Vlad'
import Artem from '../../pages/Artem'
import Oleg from '../../pages/Oleg'
import Gena from '../../pages/Gena'
import Form from '../../pages/Form'
import { ARTEM_ROUTE, GENA_ROUTE, VLAD_ROUTE, FORM_ROUTE } from './config'

const MainRouter = ({ isAuth = false }) => {
  return (
    <Routes>
      <Route path={ARTEM_ROUTE} element={<Artem />} />
      <Route path={VLAD_ROUTE} element={<Vlad />} />
      <Route path={FORM_ROUTE} element={<Form />} />
      {isAuth && <Route path={GENA_ROUTE} element={<Gena />} />}
      {isAuth && <Route path="/private" element={<Oleg />} />}{' '}
      {/* Приватный маршрут */}
      {!isAuth && <Navigate to="/login" />}{' '}
    </Routes>
  )
}

export default MainRouter
