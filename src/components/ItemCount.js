import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

const ItemCount = ({stock, initial, onAdd}) => {

    const [estado, setEstado] = useState(initial)

    const sumar = () => {
        estado < stock ? setEstado(estado + 1) : setEstado(estado)
    }

    const restar = () => {
        estado > initial ? setEstado(estado - 1) : setEstado(estado)
    }

    const agregar = () => {
        onAdd(estado)
    }

  return (
    <>
        <div id="itemCount">
            <Button className="myButton" onClick={restar}>-</Button>
            <p>{estado}</p>
            <Button className="myButton" onClick={sumar}>+</Button>
        </div>
        <div className="btnCompra">
        <Button className="myButton" onClick={agregar} id="botonDetail">Agregar al carrito</Button>
        </div>
    </>        
  )
}

export default ItemCount