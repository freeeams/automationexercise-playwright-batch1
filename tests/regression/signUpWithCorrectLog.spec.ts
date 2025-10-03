import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { LoginSignUpPage } from "../../pages/loginSignUpPage";
test.describe('sign up with correct login test cases', async () => {
    let homePage: HomePage;
    let loginSignUpPage: LoginSignUpPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginSignUpPage = new LoginSignUpPage(page);
    });

    test('login with correct email and password', async ({ page }) => {
        await page.goto(process.env.baseUrl!);
        await homePage.verifyHomePage();
        await loginSignUpPage.clickOnSignUpLoginButton();
        await loginSignUpPage.verifyLoginTitle('Login to your account');
        await loginSignUpPage.enterLoginCredentials('freams.fox@gmail.com','freams.fox@gmail.com' );
        await loginSignUpPage.clickOnLoginButton();
     
    });
});
