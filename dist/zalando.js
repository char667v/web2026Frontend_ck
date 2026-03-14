const products = [
    {
        brand: "Pier One",
        name: "Lace-ups - cognac",
        price: 27.99,
        image: "https://cdn.pixabay.com/photo/2023/02/11/18/02/desert-7783495_1280.jpg",
        isFavorite: false
    },
    {
        brand: "Nike",
        name: "Air Max - white",
        price: 89.99,
        image: "https://cdn.pixabay.com/photo/2023/02/11/18/02/desert-7783495_1280.jpg",
        isFavorite: false
    },
    {
        brand: "Adidas",
        name: "Sneakers - black",
        price: 64.99,
        image: "https://cdn.pixabay.com/photo/2023/02/11/18/02/desert-7783495_1280.jpg",
        isFavorite: false
    },
    {
        brand: "Puma",
        name: "Running shoes - blue",
        price: 59.99,
        image: "https://cdn.pixabay.com/photo/2023/02/11/18/02/desert-7783495_1280.jpg",
        isFavorite: false
    },
    {
        brand: "Vans",
        name: "Classic slip-ons - checkerboard",
        price: 49.99,
        image: "https://cdn.pixabay.com/photo/2023/02/11/18/02/desert-7783495_1280.jpg",
        isFavorite: false
    }
];
window.addEventListener("load", () => {
    products.map((product) => {
        const template = document.getElementById("productTemplate");
        const clone = template.content.cloneNode(true);
        clone.querySelector(".brand").textContent = product.brand;
        clone.querySelector(".product-name").textContent = product.name;
        clone.querySelector(".price").textContent = "£" + product.price;
        clone.querySelector(".product-image").src = product.image;
        clone.querySelector(".product-image").alt = product.name;
        document.getElementById("productContainer")?.appendChild(clone);
    });
});
//# sourceMappingURL=zalando.js.map