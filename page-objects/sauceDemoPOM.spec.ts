import { expect, Page } from '@playwright/test';

// Locators

export function usernameInput(page: Page) {
    return page.locator('#user-name')
}

export function passwordInput(page: Page) {
    return page.locator('#password')
}

function loginBtn(page: Page) {
    return page.locator('#login-button')
}

function addToCartBtn(page: Page, productPosition: number) {
    return page.locator(`.inventory_item:nth-child(${productPosition}) .btn_inventory`)
}

function cartBtn(page: Page) {
    return page.locator('.shopping_cart_link')
}

function checkoutBtn(page: Page) {
    return page.locator('#checkout')
}

function firstNameInput(page: Page) {
    return page.locator('#first-name')
}

function lastNameInput(page: Page) {
    return page.locator('#last-name')
}

function zipCodeInput(page: Page) {
    return page.locator('#postal-code')
}

function continueCheckoutBtn(page: Page) {
    return page.locator('#continue')
}

function finishCheckoutBtn(page: Page) {
    return page.locator('#finish')
}

function orderCompleteMessage(page: Page): any {
    return page.locator('.complete-header')
}

// functions

export async function login(page: Page, username: string, password: string) {
    await usernameInput(page).fill(username)
    await passwordInput(page).fill(password)
    await loginBtn(page).click()
}

export async function addProductToCart(page: Page, productPosition: number) {
    await addToCartBtn(page, productPosition).click();
}

export async function gotToCart(page: Page) {
    await cartBtn(page).click()
}

export async function proccedToCheckout(page: Page, firstName: string, lastName: string, zipCode: string) {
    await checkoutBtn(page).click()
    await firstNameInput(page).fill(firstName)
    await lastNameInput(page).fill(lastName)
    await zipCodeInput(page).fill(zipCode)
    await continueCheckoutBtn(page).click()
}

export async function finishCheckout(page: Page) {
    await finishCheckoutBtn(page).click()
    await expect(orderCompleteMessage(page)).toBeVisible()
}

export async function assertSuccessCheckoutMessage(page: Page, successMesagge: string) {
    await expect(orderCompleteMessage(page)).toHaveText(successMesagge)
}

