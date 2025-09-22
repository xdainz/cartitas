const formAddProduct = document.getElementById('formAddProduct');
const productContainer = document.getElementById('productContainer');

formAddProduct.addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const image = document.getElementById('productImage').value;
  const desc = document.getElementById('productDesc').value;

  // Crear tarjeta de producto
  const col = document.createElement('div');
  col.classList.add('col-12','col-md-4','mb-3','product-card');
  col.innerHTML = `
    <div class="card shadow-sm">
      <img src="${image}" class="card-img-top product-img" alt="${name}">
      <div class="card-body">
        <h5 class="card-title product-name">${name}</h5>
        <p class="card-text product-price">$${price}</p>
        <p class="product-desc">${desc}</p>
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
productContainer.addEventListener('click', function(e){
  if (e.target && e.target.classList.contains('btn-delete')) {
    const productCard = e.target.closest('.col-12');
    if (productCard) productCard.remove();
  }
});
