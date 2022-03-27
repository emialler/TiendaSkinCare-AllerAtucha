import NavBar from './components/NavBar.js'
import Main from './components/Main'
import Footer from './components/Footer.js'
import { BrowserRouter } from 'react-router-dom'
import CartContext from './context/CartContext.js'


const App = () => {

    return (
        <CartContext>
            <BrowserRouter>
                <NavBar/>
                <Main/>
                <Footer/>
            </BrowserRouter>
        </CartContext>
    )
}

export default App