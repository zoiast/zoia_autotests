const { test, expect } = require('@playwright/test');

const signIn = {
  email: 'standard_user',
  password: 'secret_sauce'
}

module.exports =  { signIn };