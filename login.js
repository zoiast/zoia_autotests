const { expect } = require('@playwright/test');

async function login(page, {email, password}) {

  await page.getByTestId('username').fill(email);
  await page.getByTestId('password').fill(password);
  await page.getByTestId('login-button').click();
}

module.exports = { login };