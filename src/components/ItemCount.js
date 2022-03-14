import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

const ItemCount = ({stock, initial}) => {

    const [estado, setEstado] = useState(initial)

    const onAdd = () => {
        estado < stock ? setEstado(estado + 1) : setEstado(estado)
    }

    const onRemove = () => {
        estado > initial ? setEstado(estado - 1) : setEstado(estado)
    }

  return (
        <div id="itemCount">
            <Button onClick={onRemove}>-</Button>
            <p>{estado}</p>
            <Button onClick={onAdd}>+</Button>
        </div>             
  )
}

export default ItemCount