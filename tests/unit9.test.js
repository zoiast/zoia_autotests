const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
  await page.goto('/'); 
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();
  await expect(page).toHaveURL('/inventory.html');
});

test('Perform Login:', async ({ page }) => {
  await expect(page.getByTestId('title')).toBeVisible(); 

  await expect(page.getByTestId('shopping-cart-link')).toBeVisible(); 
  
  await expect(page.getByTestId('inventory-item')).not.toHaveCount(0);
});

test(' Add product to the cart:', async ({ page }) => {
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();

  const cartIcon = page.getByTestId('shopping-cart-badge');
  await expect(cartIcon).toHaveText('1');

  const productPage = await page.getByTestId('item-4-title-link').textContent();

  const cart =  page.getByTestId('shopping-cart-link');
  await cart.click();

  const cartPage = await page.getByTestId('item-4-title-link').textContent();
  expect(productPage).toBe(cartPage);

  await page.getByTestId('continue-shopping').click();

  await page.getByTestId('remove-sauce-labs-backpack').click();

  await expect(cartIcon).toHaveCount(0);

  await cart.click();

  await expect(page.getByTestId('inventory-item')).toHaveCount(0);
});
