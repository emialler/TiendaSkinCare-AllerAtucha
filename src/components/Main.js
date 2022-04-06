import React from 'react'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Contacto from './Contacto'
import Tips from './Tips'
import Checkout from './Checkout'

const Main = () => {
  return (
    <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='/tips' element={<Tips/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
  )
}

export default Main