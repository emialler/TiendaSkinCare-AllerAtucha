import { createContext, useState } from "react";

export const contexto = createContext()

const {Provider} = contexto

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (producto, cantidad) =>{

        const copiaCarrito = [...carrito]
        const itemAlCarrito = {...producto, cantidad}
        
        if(isInCart(producto.id)){
            let index = copiaCarrito.findIndex( item => item.id === producto.id)
            copiaCarrito[index].cantidad += cantidad
            setCarrito(copiaCarrito)
        }else{
            copiaCarrito.push(itemAlCarrito)
            setCarrito(copiaCarrito)
            console.log(copiaCarrito)
        }
  }

    const removeItem = (producto) =>{
        let nuevoCarrito = carrito.filter( item => item.id !== producto.id)
        setCarrito(nuevoCarrito)
        console.log(nuevoCarrito)
    }

    const clear = () =>{
        setCarrito([])
    }

    const isInCart = (id) =>{
        return carrito.some(item => item.id === id)
    }

    const valorContexto = {
        carrito,
        cantidad,
        total,
        addItem,
        removeItem,
        clear,
        isInCart
    }

  return (
    <Provider value={valorContexto}>
        {children}
    </Provider>
  )
}

export default CartContext