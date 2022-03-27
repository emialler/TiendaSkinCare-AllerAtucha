import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from '../context/CartContext'


const CartWidget = () => {

  const { calcCantidad, carrito } = useContext(contexto)

  return (
      <>
      {
        carrito == 0 ?  (<span></span>)
                        :
                        (<NavLink to="cart"><span className="material-icons">shopping_cart</span>{calcCantidad()}</NavLink>)
      }
    
    </>
  )
}

export default CartWidget