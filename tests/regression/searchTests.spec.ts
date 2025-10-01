import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';
test.describe('search product test cases', async () => {
    let homePage: HomePage
    let productsPage: ProductsPage;

    test.beforeEach('Setting up preconditions', async ({ page }) => {
        homePage = new HomePage(page);
        productsPage = new ProductsPage(page);
        await page.goto(process.env.baseUrl!);
    });
    test('search product and verify products', async ({ page }) => {
        await homePage.verifyHomePage();
        await homePage.clickOnTopNavigationLink('Products');
        await productsPage.searchProduct('t-shirt');
        await productsPage.verifyAllProductsTitle();
        await productsPage.verifyAllSearchedProducts();
    })
})


