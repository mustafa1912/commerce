import React from 'react'
import './style/css/bootstrap.css'
import './style/css/style.css'
 
import Nav from './layouts/nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import CategoryBooks from './pages/categoryBooks'


function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='labtops' element={<CategoryBooks />} />
        <Route path='pc' element={<CategoryBooks />} />
        <Route path='Mobile' element={<CategoryBooks />} />
        <Route path='bags' element={<CategoryBooks />} />
      </Routes>
    </React.Fragment>
  )
}

export default App