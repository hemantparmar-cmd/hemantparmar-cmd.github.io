const id = localStorage.getItem("productId");
const product = products.find(p => p.id == id);

if (product) {
  document.getElementById("product-detail").innerHTML = `
    <img src="${product.image}" width="300">
    <h2>${product.name}</h2>
    <h3>₹${product.price}</h3>
    <button>Add to Cart</button>
  `;
}
