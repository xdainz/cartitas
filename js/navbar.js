function renderNavbar() {
    const navContainer = document.getElementById("navbar"); // div id where cards will render
    navContainer.innerHTML = "";

    const navbar = document.createElement("nav");

    navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top";

    navbar.innerHTML = `
   <div class="container">
            <a class="navbar-brand" href="index.html">LevelUp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <div class="d-flex align-items-center mx-auto w-100">
                    <ul class="navbar-nav ">
                        <li class="nav-item dropdown">
                            <a class="nav-link btn btn-nav btn-ripple-water" href="/products.html" id="navbarDropdown"
                                role="button" aria-expanded="false">Productos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/products.html">Magic: The Gathering</a></li>
                                <li><a class="dropdown-item" href="/index.html">Accesorios</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex position-relative mx-auto w-lg-auto my-2 my-lg-0">
                        <span class="position-absolute top-50 start-0 translate-middle-y ps-3">🔍</span>
                        <input class="form-control ps-5 rounded-pill" type="search"
                        placeholder="Buscar..." aria-label="Buscar">
                    </form>

                    <div class="navbar-nav">
                        <li class="nav-item dropdown">
                            <button class="nav-link btn btn-nav btn-ripple-water" href="#" aria-expanded="false">
                                <i class="bi bi-person"></i> Cuenta
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="navbarNavDropdown">
                                <li><a class="dropdown-item" href="inicioSession.html">Iniciar Sesión</a></li>
                                <li><a class="dropdown-item" href="registro.html">Registro</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="nav-link btn btn-nav btn-ripple-water" href="checkout.html" aria-expanded="false">
                                🛒 Carrito
                            </a>
                        </li>
                    </div>
                </div>
            </div>
    `;

    navContainer.appendChild(navbar);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderNavbar);
} else {
    renderNavbar();
}
