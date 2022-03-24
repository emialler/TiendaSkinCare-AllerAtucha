import { useState, useContext } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { contexto } from './CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

  const { addItem, removeItem } = useContext(contexto)
  
  const [cantSeleccionada, setCantSeleccionada] = useState(0)

  const onAdd = (cantidad) => {
    console.log(cantidad, "productos añadidos al carrito")
    setCantSeleccionada(cantidad)
    addItem(item, cantidad)
  } 

  const toRemove = () => {
    console.log(cantSeleccionada, "productos eliminados del carrito")
    setCantSeleccionada(0)
    removeItem(item)
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
              cantSeleccionada === 0 ? (<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
              ) : (
                <div className="btnCompra">
                  <Link to="/cart"><Button className="myButton">Ir al carrito</Button></Link>
                  <Button onClick={toRemove} className="myButton">Reiniciar compra</Button>
                </div>
              )}
          </Card>
        </Container>
    )
}

export default ItemDetail