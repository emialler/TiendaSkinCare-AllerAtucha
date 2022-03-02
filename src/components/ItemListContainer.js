import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({name}) => {
    
  return (
        <>
        <p id='greeting'>Hola {name}, bienvenida/o a Pure!</p>
        <ItemCount stock={10} initial={1}/>
        </>
  )
}

export default ItemListContainer