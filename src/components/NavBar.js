import CartWidget from "./CartWidget"
import image from "../assets/pure.jpg"
import { Link, NavLink } from "react-router-dom"
import { NavDropdown } from "react-bootstrap"

const NavBar = () => {
    
    return (
        <header>
            <nav>
                <div>
                    <Link to="/"><img src={image} alt="logo"></img></Link>
                    <h1>PURE - SkinCare</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <NavDropdown title="Productos" id="navbarScrollingDropdown">
                                <NavDropdown.Item><NavLink to="/category/limpieza">Limpieza</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink to="/category/tonificacion">Tonificación</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink to="/category/hidratacion">Hidratación</NavLink></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><NavLink to="/">Ver Todos</NavLink></NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li><NavLink to="tips">Tips de SkinCare</NavLink></li>
                        <li><NavLink to="contacto">Contacto</NavLink></li>
                        <li><CartWidget/></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar