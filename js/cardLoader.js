import { products } from "./data.js";

function createCard(product) {
    const card = document.createElement("div");

    card.className = "p-1";
    card.dataset.id = product.id;

    card.innerHTML = `
<div class="col">
    
        <div class="card shadow">
        <a class="card-link" href="product.html?id=${product.id}">
                <img class="card-img-top" src="${product.image}" alt="${product.name} image"></img>
                <div class="card-body text-center">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text subtext">${product.brand}</p>
                    <p class="card-text price">$${product.price}</p>
                    <a href="#" class="btn btn-primary add-to-cart">
                        Agregar al carrito
                    </a>
                </div>
                </a>
        <div>
</div>
    `;

    return card;
}

function renderCards() {
    const container = document.getElementById("productsContainer"); // div id where cards will render
    container.innerHTML = "";

    products.forEach((product) => {
        const productCard = createCard(product);
        container.appendChild(productCard);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderCards(products));
} else {
    renderCards(products);
}
