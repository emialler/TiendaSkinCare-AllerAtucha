import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import products from '../data/products.json'
import { Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategory} = useParams()

  useEffect(() => {
    const getData = new Promise((res, rej) => {
      setTimeout(()=>{
        if (idCategory == undefined) {
          return res(products)
        }else if(idCategory !=null){ 
          const filtered = products.filter(function(items){ 
          return items.category == idCategory; 
        });
        return res(filtered)
        }
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

  },[idCategory])

  if (loading){
    return (
      <Container id="containerSpinner">
        <Spinner animation="border" variant="light" id="spinner"/>
      </Container>
    )
}else{
    return (
      <Container id="listaProductos">
          <Row xs={2} md={4} className="g-4 mt-1 prueba">
                <ItemList items={items} />
          </Row>
      </Container>
    )
  }
}              

export default ItemListContainer