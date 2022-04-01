import { getDocs } from "firebase/firestore";
import { createContext, useState } from "react";

export const contexto = createContext()

const {Provider} = contexto

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

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

    const calcTotal = () =>{
        let totalCarrito = 0
        carrito.forEach((item) => {
            totalCarrito += item.price * item.cantidad
        })
        return totalCarrito
    }

    const calcCantidad = () =>{
        let cantidad = 0
        carrito.forEach((item) => {
            cantidad += item.cantidad
        })
        return cantidad
    }

    const pedirProductos = (consulta) => {
        const pedido = getDocs(consulta)
        pedido
            .then((res) => setItems(res.docs.map(doc => doc.data())))
            .catch(() => console.log("Error"))
            .finally(() => setLoading(false))
    }

    const valorContexto = {
        carrito,
        cantidad,
        items,
        loading,
        addItem,
        removeItem,
        clear,
        isInCart,
        calcTotal,
        calcCantidad,
        pedirProductos
    }

  return (
    <Provider value={valorContexto}>
        {children}
    </Provider>
  )
}

export default CartContext