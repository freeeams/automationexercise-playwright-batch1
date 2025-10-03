import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { BasePage} from "../../pages/basePage";
import { LoginSignUpPage } from "../../pages/loginSignUpPage";
test.describe('sign up and login test cases', async () => {
    let homePage: HomePage;
    let loginSignUpPage: LoginSignUpPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginSignUpPage = new LoginSignUpPage(page);
    });
    test('login with incorrect email and password', async ({ page }) => {
        await page.goto(process.env.baseUrl!);
        await homePage.verifyHomePage();
        await loginSignUpPage.clickOnSignUpLoginButton();
        await loginSignUpPage.verifyLoginTitle('Login to your account');
        await loginSignUpPage.enterLoginCredentials('invalid@example.com', 'wrongpassword');    
        await loginSignUpPage.clickOnLoginButton(); 
        await loginSignUpPage.verifyUnsuccessfulLoginMessage('Your email or password is incorrect!');
    })
})
