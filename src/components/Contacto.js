import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'


const Contacto = () => {

  return (
    <Container id="formulario" className="myCard">
      <h3 className="misTitulos">- Déjenos su consulta o sugerencia -</h3>
      <Form>
        <Form.Group className="itemForm">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" required/>
        </Form.Group>
        <Form.Group className="itemForm">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre y apellido" required/>
        </Form.Group>
        <Form.Group className="itemForm">
          <Form.Label>Consulta y/o Sugerencia</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su consulta o sugerencia" required/>
        </Form.Group>
        <div>
        <Button type="submit" className="myButton">Submit</Button>
        </div>
      </Form>
    </Container>
  )
}

export default Contacto