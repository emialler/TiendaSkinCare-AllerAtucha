import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Item = ({item}) => {
  return (
      <Card style={{ width: '15rem', height: "100%" }} className="text-center myCard">
          <Card.Img variant="top" src={item.pictureUrl}  style={{ marginTop: 10, height: '200px', with: "100%", objectFit: "contain" }}/>
          <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Button variant="outline-secondary">Ver detalles</Button>
              <Button variant="outline-primary">Agregar al carrito</Button>
          </Card.Body>  
      </Card>
  )
}

export default Item