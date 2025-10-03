import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { LoginSignUpPage } from "../../pages/loginSignUpPage";
test.describe('sign up with existing email test cases', async () => {   
  test('should show error message for existing email', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginSignUpPage = new LoginSignUpPage(page);
    await page.goto(process.env.baseUrl!);
    await homePage.verifyHomePage();
    await loginSignUpPage.clickOnSignUpLoginButton();
    await loginSignUpPage.verifyLoginTitle('New User Signup!');
    await loginSignUpPage.enterNewUserCredentials('freams.fox@mail.com', 'freams.fox@mail.com');
    await loginSignUpPage.clickOnNewUserSignUpButton();
    await loginSignUpPage.verifyExistingEmailMessage('Email Address already exist!');
  });
});
