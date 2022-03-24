import React, { useContext } from 'react'
import { Card, Container } from 'react-bootstrap'
import { contexto } from './CartContext'

const Cart = () => {

  /* ------ EN CONSTRUCCION ------ */
  
  const {carrito} = useContext(contexto)

  return (
    <>
      <Container>
        {carrito.map((item) => (
            <Card key={item.id}>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </Card>
        ))}
      </Container>
    </>
  )
}

export default Cart