import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ProductsPage } from "../../pages/ProductsPage";
import { ProductDetailsPage } from "../../pages/productdetailsPage";
test.describe('product details test cases', async () => {
    let homePage: HomePage
    let productsPage: ProductsPage;
    let productDetails: ProductDetailsPage;
    test.beforeEach('Setting up preconditions', async ({ page }) => {
        homePage = new HomePage(page);
        productsPage = new ProductsPage(page);
        productDetails = new ProductDetailsPage(page);
        await page.goto(process.env.baseUrl!);
    });
    test('view product details', async ({ page }) => {
        await homePage.verifyHomePage();
        await homePage.clickOnTopNavigationLink('Products');
        await productsPage.viewFirstProduct();
        await productDetails.verifyProductDetails();
    })

})
