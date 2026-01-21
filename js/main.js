const productBox = document.getElementById("product-list");

if (productBox) {
  products.forEach(p => {
    productBox.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="viewProduct(${p.id})">View</button>
      </div>
    `;
  });
}

function viewProduct(id) {
  localStorage.setItem("productId", id);
  window.location.href = "product.html";
}
