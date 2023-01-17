import React, { useState } from 'react'
import MainContainer from './containers/MainContainer.jsx';
import NavBar from './containers/NavBar.jsx';

const App = () => {
  // const [isLoggedIn, isLoggedInSetter] = useState(false)
  return (
    <div id="app">
      <MainContainer/>
      <NavBar/>
    </div>
  )
}

export default App;