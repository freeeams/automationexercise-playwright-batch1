import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginSignUpPage } from '../../pages/loginSignUpPage';
import { faker } from '@faker-js/faker'
test.describe('end to end test cases', async () => {
    let homePage: HomePage
    let loginSignUpPage: LoginSignUpPage;

    test.beforeEach('Setting up preconditions', async ({ page }) => {
        loginSignUpPage = new LoginSignUpPage(page);
        homePage = new HomePage(page);
        const url = process.env.baseUrl
        const userName = process.env.userName
        const password = process.env['password']
        console.log(url);
        await page.goto(process.env.baseUrl!);
    });
    test('End to end account create and delete flow', async ({ page }) => {
        await homePage.verifyHomePage();
        await loginSignUpPage.clickOnTopNavigationLink('Signup / Login');
        await loginSignUpPage.validateSignUpTitle();
        // await page.waitForTimeout(60_000);
    })

})