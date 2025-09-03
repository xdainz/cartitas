import { products } from "./data.js";

function init() {
    renderPage();
}

function createPage(product) {
    const page = document.createElement("div");

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
    const productPage = createPage(products[1]);

    container.appendChild(productPage);
}

window.onload = init;
