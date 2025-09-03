import { products } from "./data.js";

function getProductById() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    return products.find((product) => product.id == id);
}

function createPage(product) {
    const page = document.createElement("div");
    document.title = product.name;

    page.className = "container";

    page.innerHTML = `
    <div class="row pt-3">
        <div class="col-lg-4">
                <img class="product-img shadow" src="${product.image}" alt="${product.name} image">
        </div>

        <div class="col-lg-8 pt-3">
            <h1 class="product-name">${product.name}</h1>
            <p class="non-hover-subtext">${product.brand}</p>
            <h4 class="product-price">$${product.price}</b></h4>
            <button class="btn btn-primary product-btn">Agregar al carrito</button>
        </div>

        </div>
        <div class="col-lg-12 product-desc">
            <p>Descripcion producto:</p>
            <p>${product.desc}</p>
     </div>

`;
    return page;
}

function renderPage() {
    const container = document.getElementById("product-page");
    const productPage = createPage(getProductById());

    container.appendChild(productPage);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderPage());
} else {
    renderPage();
}
