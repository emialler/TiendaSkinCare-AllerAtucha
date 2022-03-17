import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import products from '../data/products.json'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {idItem} = useParams()
    
    useEffect(() => {
      const getData = new Promise((res, rej) => {
        setTimeout(()=>{
          res(products)
        }, 2000)
      })
  
      getData
      .then((resultado) =>{
        setItems(resultado)
      })
      .catch((error) => {
        console.log("Error")
      })
      .finally(() => {
        setLoading(false)
      })
  
    },[])
  
    if (loading){
      return (
          <Container id="containerSpinner">
            <Spinner animation="border" variant="light" id="spinner"/>
          </Container>
    )
    }else{
      const item = items.find(item => item.id == idItem)
      return (
        <ItemDetail item={item}/>
      )
    } 
}

export default ItemDetailContainer