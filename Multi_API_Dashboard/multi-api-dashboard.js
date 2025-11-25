const BASE = "http://localhost:3006";

const usersEl = document.getElementById("usersCount");
const ordersEl = document.getElementById("ordersCount");
const productsEl = document.getElementById("productsCount");
const warningEl = document.getElementById("warning");

// Fetch all API calls simultaneously
Promise.all([
    fetch(`${BASE}/users`).then(res => res.json()),
    fetch(`${BASE}/orders`).then(res => res.json()),
    fetch(`${BASE}/products`).then(res => res.json())
])
.then(([users, orders, products]) => {

    usersEl.classList.remove("skeleton");
    ordersEl.classList.remove("skeleton");
    productsEl.classList.remove("skeleton");

    usersEl.textContent = users.length;
    ordersEl.textContent = orders.length;
    productsEl.textContent = products.length;

})
.catch(err => {
    warningEl.textContent = "⚠️ Some data could not be loaded.";

    usersEl.classList.remove("skeleton");
    ordersEl.classList.remove("skeleton");
    productsEl.classList.remove("skeleton");

    usersEl.textContent = "--";
    ordersEl.textContent = "--";
    productsEl.textContent = "--";
});
