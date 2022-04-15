import React, { useContext, useState } from 'react'
import { ordenesCollection } from '../firebase'
import { serverTimestamp, addDoc } from 'firebase/firestore'
import { contexto } from '../context/CartContext'
import { Container, Form, Button } from 'react-bootstrap'
import { toast } from "react-toastify"

const Checkout = () => {

  const [form, setForm] = useState({name: "", email: "", phone: ""})
  const [orden, setOrden] = useState({})
  const {carrito, calcTotal, clear } = useContext(contexto)

  const handleChange = (e) => {
    const { name, value } = e.target
   
    setForm({
        ...form,
        [name]: value
      })
      setOrden({
        ...form,
        items: carrito,
        date: serverTimestamp(),
        total: calcTotal()
      })
  }

  const hacerPedido = (e) => {
    e.preventDefault()

    const pedido = addDoc(ordenesCollection, orden)
    pedido
      .then((res) => {
        toast.success(`Gracias ${form.name} por su compra! Su número de seguimiento es ${res.id}`)
        clear()
      })
      .catch(() => toast.error("Error al realizar la compra"))
  }
    
  return (
    <Container id="formulario" className="myCard">
      <Form>
        <h3 className="misTitulos">Complete el formulario para finalizar la compra</h3>
        <Form.Group className="itemForm">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control type="text" required placeholder="Ingrese su nombre y apellido" name="name" value={form.name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="itemForm">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="number" required placeholder="Ingrese su número de teléfono" name="phone" value={form.phone} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="itemForm">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required placeholder="Ingrese su email" name="email" value={form.email} onChange={handleChange}/>
        </Form.Group>
        <div>
        <Button type="submit" onClick={hacerPedido} className="myButton">Finalizar Compra</Button>
        </div>
      </Form>
    </Container>
  )
}

export default Checkout