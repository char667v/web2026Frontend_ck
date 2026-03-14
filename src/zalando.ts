type Product = {
    brand: string;
    name: string;
    price: number;
    image: string;
    isFavorite: boolean;
};

const products: Product[] = [
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
        const template = document.getElementById("productTemplate") as HTMLTemplateElement;
        const clone = template.content.cloneNode(true) as DocumentFragment;

        (clone.querySelector(".brand") as HTMLElement).textContent = product.brand;
        (clone.querySelector(".product-name") as HTMLElement).textContent = product.name;
        (clone.querySelector(".price") as HTMLElement).textContent = "£" + product.price;
        (clone.querySelector(".product-image") as HTMLImageElement).src = product.image;
        (clone.querySelector(".product-image") as HTMLImageElement).alt = product.name;

        document.getElementById("productContainer")?.appendChild(clone);
    });
});