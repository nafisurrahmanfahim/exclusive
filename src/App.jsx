import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Layouts from './components/Layouts'


const App = () => {


  let multiPage = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layouts/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/product' element={<ProductPage/>}></Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={multiPage}></RouterProvider>
  )
}

export default App