import { Card, Container, Button } from 'react-bootstrap'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

  return (
    <Container className="detalle">
        <Card className="imgCard">
          <Card.Img id="imgDetalle" src={item.pictureUrl}></Card.Img>
        </Card>
        <Card className="descriptionCard">
          <Card.Title className="title">{item.title}</Card.Title>
          <Card.Text id="description">{item.description}</Card.Text>
          <Card.Title className="title">${item.price}</Card.Title>
          <ItemCount stock={10} initial={1}/>
          <Button id="botonDetail" variant="outline-primary">Agregar al carrito</Button>
        </Card>
      </Container>
  )
}

export default ItemDetail