// @ts-nocheck
const { test, expect } = require('@playwright/test');
const {LoginPage} = require('./pages/login.page')
//require('dotenv').config();
//hooks 
// - beforeAll, beforeEach, AfterAll, afterEach


test.beforeEach(async ()=> {
  const loginData = new LoginPage(page)
await loginData.loginUser()
})
test.afterAll(async ()=> {
//sigout
})
test.afterEach(async ()=> {
})

test.afterEach('Login', async ({ browser }) => {
  const page = await context.newPage()
  await page.goto(process.env.BASE_URL)
  await page.locator('#user-name').fill(process.env.ADMIN_USERNAME)
  await page.locator('#password').fill(process.env.PASSWORD)
  await page.locator('#login-button').click()
  const loginData = new LoginPage(page)
  await loginData.loginUser()
})


//Giving username and password wrongly and trying to login
test('Dashboard', async ({ page }) => {
 const errorText = page.locator('[data-test="error"]').textContent()
  expect(errorText).toHaveText('Epic sadface: Username and password do not match any user in this service')
})

test('Label Components Check')
test('Label Components Check')
test('Label Components Check')
test('Label Components Check')