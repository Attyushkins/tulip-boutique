
const products = [
    { name: "Aafke", price: 1500, color: "pink", img: "images/tulip1.jpg" },
    { name: "Ace Pink", price: 1800, color: "pink", img: "images/tulip2.jpg" },
    { name: "Acropolis", price: 1700, color: "pink", img: "images/tulip3.jpg" },
    { name: "Ad Rem", price: 2000, color: "red", img: "images/tulip4.jpg" },

    { name: "White Dream", price: 1600, color: "white", img: "images/tulip5.jpg" },
    { name: "Snow Queen", price: 1700, color: "white", img: "images/tulip6.jpg" },
    { name: "Golden Sun", price: 1900, color: "yellow", img: "images/tulip7.jpg" },
    { name: "Yellow Joy", price: 1650, color: "yellow", img: "images/tulip8.jpg" },

    { name: "Red Fire", price: 2100, color: "red", img: "images/tulip9.jpg" },
    { name: "Cherry Love", price: 1950, color: "red", img: "images/tulip10.jpg" },
    { name: "Soft Pink", price: 1750, color: "pink", img: "images/tulip11.jpg" },
    { name: "Rose Dream", price: 1800, color: "pink", img: "images/tulip12.jpg" },

    { name: "Milk White", price: 1500, color: "white", img: "images/tulip13.jpg" },
    { name: "Cream Silk", price: 1600, color: "white", img: "images/tulip14.jpg" },
    { name: "Sunny Day", price: 1700, color: "yellow", img: "images/tulip15.jpg" },
    { name: "Lemon Fresh", price: 1800, color: "yellow", img: "images/tulip16.jpg" }
];

const container = document.getElementById("products");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");


function renderProducts(list) {
    container.innerHTML = "";

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price} ₸</p>
            <button class="buy-btn">В корзину</button>
        `;

        container.appendChild(card);
    });
}

function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedColor = filterSelect.value;

    const filtered = products.filter(p => {
        const matchName = p.name.toLowerCase().includes(searchValue);
        const matchColor = selectedColor === "all" || p.color === selectedColor;

        return matchName && matchColor;
    });

    renderProducts(filtered);
}
searchInput.addEventListener("input", filterProducts);
filterSelect.addEventListener("change", filterProducts);

renderProducts(products);