const { test, expect } = require('@playwright/test');

test('Perform Login:', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.locator('input[data-test="login-button"]').click();
  expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  expect(page.getByText('Products')).toBeVisible(); 
  //але мені здається це варік не дуже, бо такий текст 
  //може ще з часом з*явитись. тут мабуть по data-test краще. чи ні? ось так: 
  //const title = page.locator('span[data-test="title"]');
  //expect(title).toBeVisible;

  const shoppingCart =  page.locator('span[data-test="shopping_cart_link"]');
  expect(shoppingCart).toBeVisible;
  
  const products =  page.locator('div[data-test="inventory-item"]');
  const productCount = await products.count();

  expect(productCount).toBeGreaterThan(1);
  await page.close();
  });

test(' Add product to the cart:', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('input[data-test="login-button"]').click();

    expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();

    const cartIcon =  page.locator('span[data-test="shopping-cart-badge"]');
    expect(cartIcon).toHaveText('1');

    const productPage = await page.textContent('div[data-test="inventory-item-name"]');

    const cart =  page.locator('a[data-test="shopping-cart-link"]');
    await cart.click();

    const cartPage = await page.textContent('div[data-test="inventory-item-name"]');
    expect(productPage).toBe(cartPage);

    await page.locator('button[data-test="continue-shopping"]').click();

    await page.locator('button[data-test="remove-sauce-labs-backpack"]').click();

    await expect(cartIcon).toHaveCount(0);

    await cart.click();

    const product = page.locator('div[data-test="inventory-item"]');
    await expect(product).toHaveCount(0);

    await page.close();

  })
