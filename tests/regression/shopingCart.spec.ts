import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import {BasePage } from '../../pages/basePage';

test.describe('shopping cart test cases', async () => {
    let homePage: HomePage;
    let basePage: BasePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        basePage = new BasePage(page);
        await page.goto(process.env.baseUrl!);
    });
    test('verifuy shopping cart', async ({ page }) => {
        await homePage.verifyHomePage();
        await homePage.clickOnTopNavigationLink('Cart');
        await basePage.verifyTitle('You have been successfully subscribed!');
    })

})
