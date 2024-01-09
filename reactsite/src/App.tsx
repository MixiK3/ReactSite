import React, { useState } from 'react'
import Navbar from './components/Navbar'
import GlobalStyles from './styles/global-styles'
import MainRouter from './main'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div>
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />
      <GlobalStyles></GlobalStyles>
      <MainRouter />
    </div>
  )
}

export default App
