async function loadProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        products.forEach(p => {
            console.log("Product:", p.title);
            console.log("Price: $" + p.price);
            console.log("Image:", p.image);
            console.log("-----");
        });
    } catch (err) {
        console.log("Failed to load products. Please try again.");
    }
}

loadProducts();
