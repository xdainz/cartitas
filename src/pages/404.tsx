import { Link } from "react-router-dom";

function NotFound() {
    document.title = "404";
    return (
        <div className="container text-center">
            <h1>
                <b>404</b>
                <br />
                No Encontrado.
            </h1>
            <Link to="/">
                <button className="btn btn-secondary">Volver al Inicio</button>
            </Link>
        </div>
    );
}

export default NotFound;
