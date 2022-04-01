import { getDoc, doc, query, where } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { productosCollection } from '../firebase'
import ItemDetail from './ItemDetail'
import { contexto } from '../context/CartContext'


const ItemDetailContainer = () => {
    
    const { pedirProductos, items, loading } = useContext(contexto)
    const { idItem } = useParams()
    
    useEffect(() => {

      pedirProductos(query(productosCollection, where("id", "==", Number(idItem))))

    },[])
  
    return (
      <>
        {
          loading  ?  (<Container id="containerSpinner">
                          <Spinner animation="border" variant="light" id="spinner"/>
                      </Container>)
                      :
                      (<ItemDetail item={items.find(item => item.id == idItem)}/>)
        }
      </>
    )
}

export default ItemDetailContainer