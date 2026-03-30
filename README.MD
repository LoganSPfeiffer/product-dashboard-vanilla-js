Product Dashboard
A simple product dashboard built with HTML, CSS, and JavaScript. It pulls product data from the Store Products API and displays the first 5 items as cards on the page.
How It Works

fetchProductsThen() uses .then() and .catch() to fetch data and log product names to the console
fetchProductsAsync() uses async/await and try/catch to fetch data and render it on the page
displayProducts() builds the product cards using DOM methods and appends them to the container
handleError() catches and logs any issues during the fetch

Files

index.html - page structure with header, product container, and footer
style.css - styling and hover effects for the product cards
cp_2.js - all the fetch logic and DOM rendering

API
Data comes from https://www.course-api.com/javascript-store-products