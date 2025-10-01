import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        LevelUp
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <div className="d-flex align-items-center mx-auto w-100">
                            <ul className="navbar-nav ">
                                <li className="nav-item dropdown">
                                    <a className="nav-link btn btn-nav btn-ripple-water">
                                        Productos
                                    </a>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/TCG"
                                            >
                                                Trading Card Games
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to="/"
                                            >
                                                Accesorios
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex position-relative mx-auto w-lg-auto my-2 my-lg-0">
                                <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                                    🔍
                                </span>
                                <input
                                    className="form-control ps-5 rounded-pill"
                                    type="search"
                                    placeholder="Buscar..."
                                    aria-label="Buscar"
                                ></input>
                            </form>

                            <div className="navbar-nav"></div>
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link btn btn-nav btn-ripple-water"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-person"></i> Cuenta
                                </button>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarNavDropdown"
                                >
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/login"
                                        >
                                            Iniciar Sesión
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/register"
                                        >
                                            Registro
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link
                                    className="nav-link btn btn-nav btn-ripple-water"
                                    to="/checkout"
                                    aria-expanded="false"
                                >
                                    🛒 Carrito
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;
