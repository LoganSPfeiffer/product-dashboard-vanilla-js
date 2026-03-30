// store API link
const API_URL = "https://www.course-api.com/javascript-store-products";

// fetch with .then() - logs product names to the console
function fetchProductsThen() {
    fetch(API_URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            console.log("--- Products from .then() ---");
            products.forEach(function (product) {
                console.log(product.fields.name);
            });
        })
        .catch(function (error) {
            console.log("Fetch error (then): " + error.message);
        });
}

// fetch with async/await - sends data to displayProducts
async function fetchProductsAsync() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// builds product cards and adds them to the page
function displayProducts(products) {
    const container = document.querySelector("#product-container");

    // clear the loading message
    container.innerHTML = "";

    // grab the first 5 products
    const firstFive = products.slice(0, 5);

    firstFive.forEach(function (product) {
        // get the product info
        const name = product.fields.name;
        const price = product.fields.price;
        const imageUrl = product.fields.image[0].url;

        // card div
        const card = document.createElement("div");
        card.classList.add("product-card");

        // image
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = name;

        // product name
        const title = document.createElement("h2");
        title.textContent = name;

        // price (comes in cents so divide by 100)
        const priceTag = document.createElement("p");
        priceTag.textContent = "$" + (price / 100).toFixed(2);

        // put it all together
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(priceTag);
        container.appendChild(card);
    });
}

// handles any fetch errors
function handleError(error) {
    console.log("An error occurred: " + error.message);
}

// run both fetch functions
fetchProductsThen();
fetchProductsAsync();