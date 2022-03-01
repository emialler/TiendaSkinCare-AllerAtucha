import React from 'react'
import { useState } from 'react'
import { Card, Container, Button } from 'react-bootstrap'

const ItemCount = ({stock, initial}) => {

    const [estado, setEstado] = useState(initial)

    const onAdd = () => {
        if (estado < stock)
        setEstado(estado + 1)
    }

    const onRemove = () => {
        if (estado > initial)
        setEstado(estado - 1)
    }

  return (
        <Container>
            <Card style={{ width: '18rem' }} className="text-center">
                <Card.Body>
                    <Card.Title>Crema Facial</Card.Title>
                    <div id="itemCount">
                        <Button onClick={onAdd}>+</Button>
                        <Card.Text>{estado}</Card.Text>
                        <Button onClick={onRemove}>-</Button>
                    </div>
                    <Button variant="outline-primary">Agregar al carrito</Button>
                </Card.Body>  
            </Card>
        </Container>
  )
}

export default ItemCount