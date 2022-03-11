import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import products from '../data/products.json'
import { Container, Row } from 'react-bootstrap'


const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

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
    return <h1 style={{textAlign:'center', fontSize:'2.5rem', paddingTop:'10rem'}}>Cargando...</h1>
  }else{
    return (
      <Container>
          <Row xs={2} md={4} className="g-4 mt-1 prueba">
                <ItemList items={items} />
          </Row>
      </Container>
    )
  }
}              

export default ItemListContainer