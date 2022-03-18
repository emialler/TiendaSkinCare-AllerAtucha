import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'


const Contacto = () => {

  /* ----------- EN PROCESO -------------*/

  return (
    <Container id="formulario">
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre y apellido" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Consulta y/o Sugerencia</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su consulta o sugerencia" />
        </Form.Group>
        <div>
        <Button type="submit">Submit</Button>
        </div>
      </Form>
    </Container>
  )
}

export default Contacto