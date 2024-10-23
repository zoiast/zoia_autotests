# SauceDemo Automated Tests

This project contains automated tests for verifying the functionality of the [SauceDemo](https://www.saucedemo.com/) website, written using the Playwright framework.

## Test Descriptions

### 1. Test: Perform Login

**Name:** `Perform Login`

**Description:** This test verifies the ability to log in to the site using valid credentials and the presence of products on the inventory page after a successful login.

**Steps:**
1. Open the [SauceDemo](https://www.saucedemo.com/) homepage.
2. Fill the "Username" field with `standard_user`.
3. Fill the "Password" field with `secret_sauce`.
4. Click the login button.
5. Verify that the URL has changed to `https://www.saucedemo.com/inventory.html`.
6. Check that the "Products" title is visible on the page (it is recommended to use the selector `span[data-test="title"]` for better reliability).
7. Verify that there is more than one product on the page.

### 2. Test: Add Product to the Cart

**Name:** `Add product to the cart`

**Description:** This test verifies the functionality of adding a product to the cart, displaying it in the cart, and removing the product from the cart.

**Steps:**
1. Open the [SauceDemo](https://www.saucedemo.com/) homepage.
2. Fill the "Username" field with `standard_user`.
3. Fill the "Password" field with `secret_sauce`.
4. Click the login button.
5. Verify that the URL has changed to `https://www.saucedemo.com/inventory.html`.
6. Click the add-to-cart button for the "Sauce Labs Backpack" product.
7. Verify that the cart icon shows the number `1`.
8. Get the product name on the inventory page.
9. Go to the cart.
10. Verify that the product name in the cart matches the name on the inventory page.
11. Continue shopping.
12. Remove the product from the cart.
13. Verify that the cart icon no longer shows the number `1`.
14. Go to the cart.
15. Verify that there are no products in the cart.

## Requirements

- Node.js
- Playwright

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/saucedemo-tests.git

## Navigate to the project directory
cd saucedemo-tests

## Install the dependencies
npm install

## Running the Tests
- for all tests:
npx playwright test  

- for one test file:
npx playwright test name of test file


