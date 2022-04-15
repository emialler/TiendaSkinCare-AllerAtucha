import NavBar from './components/NavBar.jsx'
import Main from './components/Main'
import Footer from './components/Footer.js'
import { BrowserRouter } from 'react-router-dom'
import CartContext from './context/CartContext.jsx'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

    return (
        <CartContext>
            <BrowserRouter>
                <NavBar/>
                <Main/>
                <Footer/>
                <ToastContainer/>
            </BrowserRouter>
        </CartContext>
    )
}

export default App