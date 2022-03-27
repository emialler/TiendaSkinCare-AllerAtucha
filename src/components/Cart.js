import React, { useContext } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { contexto } from '../context/CartContext'


const Cart = () => {

  /* ------ EN CONSTRUCCION ------ */
  
  const {carrito, calcTotal, removeItem, clear} = useContext(contexto)

  return (
      <>
        {carrito.map((item) => (
          <Container className="cart">
            <Card key={item.id} id="imgCart">
              <Card.Img src={item.pictureUrl}></Card.Img>
            </Card>
            <Card className="detalleCart">
              <div>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                <Card.Text>Cantidad: {item.cantidad}</Card.Text>
                <Card.Title>Subtotal: ${item.price * item.cantidad}</Card.Title>
              </div>
              <div>
                <Button className="myButton" onClick={() => removeItem(item)}>Eliminar</Button>
              </div>
            </Card>
          </Container>
        ))}
        {
          carrito == 0 ? (<div id="cartEmpty">
                            <h2>No hay productos en el carrito</h2>
                            <Link to="/"><Button className="myButton">Ver Productos</Button></Link>
                          </div>) 
                          : 
                          (<Card className="total">
                            <h3>Total: ${calcTotal()}</h3>
                            <Button className="myButton">Terminar Compra</Button>
                            <Button className="myButton" onClick={() => clear()}>Vaciar Carrito</Button>
                          </Card>)
        }     
  </>   
  )
}

export default Cart