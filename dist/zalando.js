const products = [
    {
        brand: "Pier One",
        name: "Lace-ups - cognac",
        price: 27.99,
        image: "https://cdn.pixabay.com/photo/2016/11/19/18/06/footwear-1840619_1280.jpg",
        isFavorite: false,
        isNew: true,
    },
    {
        brand: "Nike",
        name: "Air Max - white",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        isFavorite: false,
        isNew: true,
    },
    {
        brand: "Adidas",
        name: "Sneakers - black",
        price: 64.99,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600",
        isFavorite: false,
        isNew: false,
    },
    {
        brand: "Puma",
        name: "Running shoes - blue",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600",
        isFavorite: false,
        isNew: false,
    },
    {
        brand: "Vans",
        name: "Classic slip-ons - checkerboard",
        price: 49.99,
        image: "https://cdn.pixabay.com/photo/2023/02/11/18/02/desert-7783495_1280.jpg",
        isFavorite: false,
        isNew: true,
    },
    {
        brand: "Converse",
        name: "Chuck Taylor High Top - black",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=600",
        isFavorite: false,
        isNew: false
    },
    {
        brand: "New Balance",
        name: "990v5 - grey",
        price: 74.99,
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600",
        isFavorite: false,
        isNew: false,
    },
    {
        brand: "Reebok",
        name: "Classic Leather - white",
        price: 54.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600",
        isFavorite: false,
        isNew: true,
    },
    {
        brand: "Jordan",
        name: "Air Jordan 1 - red",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600",
        isFavorite: false,
        isNew: true,
    },
    {
        brand: "Nike",
        name: "Air Force 1 - white",
        price: 94.99,
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600",
        isFavorite: false,
        isNew: true
    },
    {
        brand: "Skechers",
        name: "D'Lites - black white",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600",
        isFavorite: false,
        isNew: false
    },
    {
        brand: "Asics",
        name: "Gel-Kayano - blue",
        price: 84.99,
        image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600",
        isFavorite: false,
        isNew: true
    }
];
window.addEventListener("load", () => {
    products.map((product) => {
        const template = document.getElementById("productTemplate");
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector(".product-card");
        if (product.isNew)
            card.classList.add("is-new");
        clone.querySelector(".brand").textContent = product.brand;
        clone.querySelector(".product-name").textContent = product.name;
        clone.querySelector(".price").textContent = product.price + "KR.";
        clone.querySelector(".product-image").src = product.image;
        clone.querySelector(".product-image").alt = product.name;
        document.getElementById("productContainer")?.appendChild(clone);
    });
});
//# sourceMappingURL=zalando.js.map