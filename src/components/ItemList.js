import React from 'react'
import { Col } from 'react-bootstrap'
import Item from './Item'


const ItemList = ({items}) => {
  return (
    <>
    {items.map((item)=>(
      <Col key={item.id}>
        <Item item={item}/>
      </Col>
    ))}
    </>
  )
}

export default ItemList