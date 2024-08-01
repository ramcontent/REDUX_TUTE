import { useState } from 'react'
import React from 'react'
import User from './User'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'

function App() {

  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  )
}

export default App;
