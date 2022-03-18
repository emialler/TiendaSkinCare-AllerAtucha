import { useState } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  
  const [carrito, setCarrito] = useState(0)

  const onAdd = (cantidad) => {
    setCarrito(cantidad)
  } 

    return (
      <Container className="detalle">
          <Card className="imgCard">
            <Card.Img id="imgDetalle" src={item.pictureUrl}></Card.Img>
          </Card>
          <Card className="descriptionCard">
            <Card.Title className="title">{item.title}</Card.Title>
            <Card.Text id="description">{item.description}</Card.Text>
            <Card.Title className="title">${item.price}</Card.Title>
            {
              carrito === 0 ? (<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
              ) : (
                <div className="btnCompra">
                  <Link to="/cart"><Button className="myButton">Ir al carrito</Button></Link>
                  <Button onClick={()=>(setCarrito(0))} className="myButton">Reiniciar compra</Button>
                </div>
              )}
          </Card>
        </Container>
    )
}

export default ItemDetail