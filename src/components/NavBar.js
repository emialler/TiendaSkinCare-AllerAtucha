import CartWidget from "./CartWidget"
import image from "../assets/pure.jpg"

const NavBar = () => {
    return (
        <header>
            <nav>
                <div>
                    <img src={image}></img>
                    <h1>PURE - SkinCare</h1>
                </div>
                <div>
                    <ul>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Tips de SkinCare</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href=""><CartWidget/></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar