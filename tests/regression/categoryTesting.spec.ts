

import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { BasePage} from "../../pages/productdetailsPage";
import { base } from "@faker-js/faker/.";
test.describe('product details test cases', async () => {
    let homePage: HomePage
    let productsPage: ProductsPage;
    let productDetails: ProductDetailsPage;
    let basePage: BasePage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        basePage = new BasePage(page);
        await page.goto(process.env.baseUrl!);
    });
    test('visible category test', async ({ page }) => {
        await homePage.verifyHomePage();
        await basePage.clickVerifyCategoryWomen()
        await basePage.clickVerifyDressCategory();
        await basePage.verifyWomenDressTitleMessage();
        await basePage.clickVerifyCategoryMen();
        await basePage.verifyNavigationToCategory();
    })

})
