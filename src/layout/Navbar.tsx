import Button from "../components/Button";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <span className="container navbar">
            <Link className="nav-icon" to="/">
                LevelUp
            </Link>
            <ul className="nav-items">
                <li>
                    <Button linkClass="nav-link" to="/Productos">
                        Productos
                    </Button>
                </li>
                <li>
                    <Button linkClass="nav-link" to="/Productos/TCG">
                        Trading Card Games
                    </Button>
                </li>
                <li>
                    <Button linkClass="nav-link" to="/Productos/Accesorios">
                        Accesorios
                    </Button>
                </li>
                <li>
                    <Button linkClass="nav-link" to="/Eventos">
                        Eventos
                    </Button>
                </li>
                <li>
                    <Button linkClass="nav-link" to="/login">
                        Iniciar Sesion
                    </Button>
                </li>
                <li>
                    <Button linkClass="nav-link" to="/register">
                        Registro
                    </Button>
                </li>
                <li>
                    <Button linkClass="nav-link" to="/Carrito">
                        Carrito
                    </Button>
                </li>
            </ul>
        </span>
    );
}
export default Navbar;
