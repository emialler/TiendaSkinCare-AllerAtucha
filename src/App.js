import NavBar from './components/NavBar.js'
import Main from './components/Main'
import Footer from './components/Footer.js'
import { BrowserRouter } from 'react-router-dom'
import CartContext from './context/CartContext.js'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

    return (
        <CartContext>
            <BrowserRouter>
                <NavBar/>
                <Main/>
                <Footer/>
                <ToastContainer />
            </BrowserRouter>
        </CartContext>
    )
}

export default App