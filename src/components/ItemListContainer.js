import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    
  return (
        <>
        <p id='greeting'>Esta es una página de venta de productos de Skin Care</p>
        <ItemCount stock={10} initial={1}/>
        </>
  )
}

export default ItemListContainer