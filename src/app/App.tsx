import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {
  WELCOME_ROOT,
  HOME_ROOT,
  FAVORITE_ROOT,
  LIBRARY_ROOT,
} from 'config/paths'

import Welcome from 'containers/Welcome/Welcome'
import Home from 'containers/features/Home/Home'
import Library from 'containers/features/Library/Library'
import Favorite from 'containers/features/Favorite/Favorite'

import Navigation from '../containers/Navigation/Navigation'

function App(): React.ReactElement {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path={WELCOME_ROOT} element={<Welcome />} />
          <Route path={HOME_ROOT} element={<Home />} />
          <Route path={LIBRARY_ROOT} element={<Library />} />
          <Route path={FAVORITE_ROOT} element={<Favorite />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
