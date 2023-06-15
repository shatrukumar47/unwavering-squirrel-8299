import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Form from '../Pages/Form'
import PageNotFound from '../Pages/PageNotFound'



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} /> 
      <Route path="*" element={<PageNotFound />} /> 
    </Routes>
  )
}

export default AllRoutes
