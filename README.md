# Product Dashboard

A vanilla JavaScript product dashboard that fetches live data from a public API and renders product cards dynamically to the page — no frameworks, no libraries, just HTML, CSS, and JavaScript.

## What It Does

- Fetches product data from the [Store Products API](https://www.course-api.com/javascript-store-products)
- Displays the first 5 products as styled cards with image, name, and price
- Demonstrates two JavaScript fetch patterns side-by-side: `.then()/.catch()` and `async/await`
- Shows a loading message while data is in-flight and an error message if the fetch fails

## Technologies Used

- HTML5
- CSS3 (Flexbox, transitions)
- Vanilla JavaScript (Fetch API, DOM manipulation, async/await)

## How to Run

No build step or dependencies required.

1. Clone or download this repository
2. Open `index.html` in any modern browser

That's it — the page will fetch and display products automatically.

## Project Structure

```
product-dashboard-vanilla-js/
├── index.html   # Page structure
├── style.css    # Card layout and hover effects
└── app.js       # Fetch logic and DOM rendering
```

## What I Learned

- How to use the **Fetch API** with both `.then()` chaining and `async/await` syntax, and when each style is clearer
- How to build and append DOM elements programmatically instead of hardcoding HTML
- How CSS **Flexbox** and `flex-wrap` make responsive card grids straightforward without a CSS framework
- How to handle API errors gracefully by surfacing feedback to the user on the page rather than only in the console
