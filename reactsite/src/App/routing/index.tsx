import React from 'react'
import Vlad from '../../pages/Vlad'
import { ARTEM_ROUTE, VLAD_ROUTE, OLEG_ROUTE, GENA_ROUTE } from './config'
import Artem from '../../pages/Artem'
import { useRoutes } from 'react-router-dom'
import Gena from '../../pages/Gena'
import Oleg from '../../pages/Oleg'

const MainRouter = () => {
  return useRoutes([
    { path: ARTEM_ROUTE, element: <Artem /> },
    { path: VLAD_ROUTE, element: <Vlad /> },
    { path: OLEG_ROUTE, element: <Oleg /> },
    { path: GENA_ROUTE, element: <Gena /> },
  ])
}

export default MainRouter
