import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Vlad from '../../pages/Vlad'
import Artem from '../../pages/Artem'
import Oleg from '../../pages/Oleg'
import Gena from '../../pages/Gena'
import {
  ARTEM_ROUTE,
  GENA_ROUTE,
  VLAD_ROUTE,
  OLEG_ROUTE,
} from './config'

const MainRouter = ({ isAuth = false }) => {
  return (
    <Routes>
      <Route path={ARTEM_ROUTE} element={<Artem />} />
      <Route path={VLAD_ROUTE} element={<Vlad />} />
      {isAuth && <Route path={GENA_ROUTE} element={<Gena />} />}
      {isAuth && <Route path={OLEG_ROUTE} element={<Oleg />} />}
    </Routes>
  )
}

export default MainRouter
