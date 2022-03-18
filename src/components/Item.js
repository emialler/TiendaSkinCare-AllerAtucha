import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
      <Card style={{ width: '15rem', height: "100%" }} className="text-center myCard">
          <Card.Img variant="top" src={item.pictureUrl}  style={{ marginTop: 10, height: '200px', with: "100%", objectFit: "contain" }}/>
          <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Link to={`/item/${item.id}`}><Button variant="outline-secondary">Ver detalles</Button></Link>
          </Card.Body>  
      </Card>
  )
}

export default Item