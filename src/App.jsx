import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Layouts from './components/Layouts'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import CheckOut from './pages/CheckOut'


const App = () => {

  let multiPage = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layouts/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/:id' element={<ProductDetails/>}></Route>
        <Route path='/product' element={<ProductPage/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/check-out' element={<CheckOut/>}></Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={multiPage}></RouterProvider>
  )
}

export default App