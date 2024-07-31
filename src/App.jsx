import { useState } from 'react'
import React from 'react'
import User from './User' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
      <div className="App">
        {/* <h1>App Component</h1> */}
        <User data={{name:'Ram More', age: 22}}/>
        </div>
  )
}

export default App;
