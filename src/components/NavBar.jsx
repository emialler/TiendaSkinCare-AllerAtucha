import CartWidget from "./CartWidget"
import image from "../assets/pure.jpg"
import { Link, NavLink } from "react-router-dom"
import { NavDropdown, Navbar, Nav } from "react-bootstrap"

const NavBar = () => {
    
    return (
        <header>
            <Navbar collapseOnSelect expand="lg">
                <div>
                    <Link to="/"><img src={image} alt="logo" id="imgLogo"></img></Link>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <div>
                            <ul className="miNav">
                                <li className="liNav">
                                    <NavDropdown title="Productos" id="navbarScrollingDropdown" className="linkNavBar miSubNav">
                                        <NavDropdown.Item><NavLink to="/category/limpieza" className="linkNavBar">Limpieza</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/category/tonificacion" className="linkNavBar">Tonificación</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink to="/category/hidratacion" className="linkNavBar">Hidratación</NavLink></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item><NavLink to="/" className="linkNavBar">Ver Todos</NavLink></NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className="liNav"><NavLink to="tips" className="linkNavBar">Tips de SkinCare</NavLink></li>
                                <li className="liNav"><NavLink to="contacto" className="linkNavBar">Contacto</NavLink></li>
                                <li className="liNav"><CartWidget/></li>
                            </ul>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default NavBar