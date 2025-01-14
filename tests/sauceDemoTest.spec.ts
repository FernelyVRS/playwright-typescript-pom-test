import { test, expect } from '@playwright/test';
import * as saucedemo from '../page-objects/sauceDemoPOM.spec';
import { describe } from 'node:test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

describe('Test suite - fernely', () => {
  test('Complete sauce demo checkout - @test', async ({ page }) => {

    // Login.
    const username = 'standard_user'
    const password = 'secret_sauce'
    await saucedemo.login(page, username, password)

    // Add product to the cart
    const productPosition = 1
    await saucedemo.addProductToCart(page, productPosition)

    // Go to the cart.
    await saucedemo.gotToCart(page)

    //Procced to checkout
    const firstName = 'John'
    const lastName = 'Doe'
    const zipCode = '90210'
    await saucedemo.proccedToCheckout(page, firstName, lastName, zipCode)

    // Finalize checkout
    await saucedemo.finishCheckout(page)

    // Verify confirmation mesagge
    const successMesagge = 'Thank you for your order!'
    await saucedemo.assertSuccessCheckoutMessage(page, successMesagge)
  });

})

