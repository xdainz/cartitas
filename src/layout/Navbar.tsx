import { Dropdown } from "react-bootstrap";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <span className="container navbar fixed-top">
            <Link className="nav-icon" to="/">
                LevelUp
            </Link>
            <ul className="nav-items">
                <li>
                    <Dropdown>
                        <Dropdown.Toggle
                            className="custom-dropdown-toggle"
                            id="productDropdown"
                        >
                            Productos
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="custom-dropdown-menu">
                            <Dropdown.Item href="/Productos/TCG">
                                Trading Card Games
                            </Dropdown.Item>
                            <Dropdown.Item href="/Productos/Accesorios">
                                Accesorios
                            </Dropdown.Item>
                            <Dropdown.Item href="/Productos/Juegos De Mesa">
                                Juegos de Mesa
                            </Dropdown.Item>
                            <Dropdown.Item href="/Productos">
                                Ver Todo
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Button linkClass="nav-link" to="/Eventos">
                        Eventos
                    </Button>
                </li>
                <li>
                    <Button linkClass="nav-link" to="/Carrito">
                        Carrito
                    </Button>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle className="custom-dropdown-toggle">
                            Mi Cuenta
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="custom-dropdown-menu">
                            <Dropdown.Item href="/login">
                                Iniciar Sesion
                            </Dropdown.Item>
                            <Dropdown.Item href="/register">
                                Registrarse
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </span>
    );
}
export default Navbar;
