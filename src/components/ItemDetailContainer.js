import React, { useEffect, useState } from 'react'
import products from '../data/products.json'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
  
    
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const prod = products[0]
      const getData = new Promise((res, rej) => {
        setTimeout(()=>{
          res(prod)
        }, 2000)
      })
  
      getData
      .then((resultado) =>{
        setItem(resultado)
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
        <>
        <ItemDetail item={item} />
        </>
      )
    }
}

export default ItemDetailContainer