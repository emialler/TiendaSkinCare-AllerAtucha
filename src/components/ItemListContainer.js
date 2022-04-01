import React, { useContext, useEffect, useState } from 'react'
import ItemList from './ItemList'
import { Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { productosCollection } from '../firebase'
import { query, where } from 'firebase/firestore'
import { contexto } from '../context/CartContext'



const ItemListContainer = () => {

  const { pedirProductos, items, loading } = useContext(contexto)

  const { idCategory } = useParams()

  
  useEffect(() => {

    !idCategory ? pedirProductos(productosCollection) 
                        : 
                  pedirProductos(query(productosCollection, where("category", "==", idCategory)))
                  
  },[idCategory])


  return (
    <>
      {
          loading  ?  (<Container id="containerSpinner">
                        <Spinner animation="border" variant="light" id="spinner"/>
                      </Container>)
                      :
                      (<Container id="listaProductos">
                          <Row xs={2} md={4} className="g-4 mt-1 prueba">
                                <ItemList items={items} />
                          </Row>
                      </Container>)
      }
    </>
    )
}       

export default ItemListContainer