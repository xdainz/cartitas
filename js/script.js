const formAddProduct = document.getElementById('formAddProduct');
const productContainer = document.getElementById('productContainer');

formAddProduct.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const image = document.getElementById('productImage').value;
    const desc = document.getElementById('productDesc').value;

    // Crear tarjeta de producto
    const col = document.createElement('div');
    col.classList.add('col-12', 'col-md-4', 'mb-3', 'product-card');
    col.innerHTML = `
    <div class="card shadow-sm">
      <img src="${image}" class="card-img-top product-img" alt="${name}">
      <div class="card-body">
        <h5 class="card-title product-name">${name}</h5>
        <p class="card-text product-price">$${price}</p>
        <p class="product-desc">${desc}</p>
        <button class="btn btn-warning btn-sm btn-edit">Editar</button>
        <button type="button" class="btn btn-danger btn-sm btn-delete">Eliminar</button>
      </div>
    </div>
  `;

    productContainer.appendChild(col);

    // Cerrar modal y resetear form
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalAddProduct'));
    modal.hide();
    formAddProduct.reset();
});

// Usamos delegación de eventos para eliminar productos dinámicos
productContainer.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('btn-delete')) {
        const productCard = e.target.closest('.col-12');
        if (productCard) productCard.remove();
    }
});

let productBeingEdited = null;

// Abrir modal de edición
document.getElementById('productContainer').addEventListener('click', function (e) {
    const card = e.target.closest('.product-card');
    if (!card) return;

    if (e.target.classList.contains('btn-edit')) {
        productBeingEdited = card;
        document.getElementById('editProductName').value = card.querySelector('.product-name').textContent;
        document.getElementById('editProductPrice').value = card.querySelector('.product-price').textContent.replace('$', '');
        document.getElementById('editProductImage').value = card.querySelector('.product-img').src;
        const descEl = card.querySelector('.product-desc');
        document.getElementById('editProductDesc').value = descEl ? descEl.textContent : '';

        const modal = new bootstrap.Modal(document.getElementById('modalEditProduct'));
        modal.show();
    }
});

// guardamos los cambios
document.getElementById('formEditProduct').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!productBeingEdited) return;

    productBeingEdited.querySelector('.product-name').textContent = document.getElementById('editProductName').value;
    productBeingEdited.querySelector('.product-price').textContent = '$' + document.getElementById('editProductPrice').value;
    productBeingEdited.querySelector('.product-img').src = document.getElementById('editProductImage').value;

    let descEl = productBeingEdited.querySelector('.product-desc');
    if (!descEl) {
        descEl = document.createElement('p');
        descEl.classList.add('product-desc');
        productBeingEdited.querySelector('.card-body').insertBefore(descEl, productBeingEdited.querySelector('.btn-delete'));
    }
    descEl.textContent = document.getElementById('editProductDesc').value;

    bootstrap.Modal.getInstance(document.getElementById('modalEditProduct')).hide();
    productBeingEdited = null;
});
