const API_URL = "https://www.course-api.com/javascript-store-products";
const PRODUCTS_TO_SHOW = 5;

// Demonstrates .then()/.catch() — logs names to the console for comparison
function fetchProductsThen() {
    fetch(API_URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            console.log("--- Products via .then() ---");
            products.forEach(function (product) {
                console.log(product.fields.name);
            });
        })
        .catch(function (error) {
            console.error("Fetch error (.then):", error.message);
        });
}

// Primary fetch — uses async/await and renders cards to the page
async function fetchProductsAsync() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        showError(error);
    }
}

function displayProducts(products) {
    const container = document.querySelector("#product-container");
    container.innerHTML = "";

    products.slice(0, PRODUCTS_TO_SHOW).forEach(function (product) {
        const { name, price, image } = product.fields;

        const card = document.createElement("div");
        card.classList.add("product-card");

        const img = document.createElement("img");
        img.src = image[0].url;
        img.alt = name;

        const title = document.createElement("h2");
        title.textContent = name;

        // Price is stored in cents
        const priceTag = document.createElement("p");
        priceTag.textContent = "$" + (price / 100).toFixed(2);

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(priceTag);
        container.appendChild(card);
    });
}

function showError(error) {
    console.error("An error occurred:", error.message);

    const container = document.querySelector("#product-container");
    container.innerHTML =
        '<p id="loading-text">Failed to load products. Please try again later.</p>';
}

fetchProductsThen();
fetchProductsAsync();
