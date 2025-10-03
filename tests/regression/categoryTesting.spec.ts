

import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { BasePage} from "../../pages/basePage";
test.describe('product details test cases', async () => {
    let homePage: HomePage
    let basePage: BasePage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        basePage = new BasePage(page);
        await page.goto(process.env.baseUrl!)

    });
    test('visible category test', async ({ page }) => {
        await homePage.verifyHomePage();
        await basePage.clickVerifyCategoryWomen();
        await basePage.verifyWomenDressTitleMessage('Women - Dress Products');
        await basePage.clickVerifyCategoryMen();
        await basePage.verifyWomenDressTitleMessage("Men - Tshirts Products");
        await basePage.clickOnProductButtons();
        await basePage.verifyTitle('All Products');
    })
})



