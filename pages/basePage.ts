import { Locator, Page, expect } from '@playwright/test';
export class BasePage {
    page: Page;
    private emailField: Locator;
    private checkoutButton: Locator;
    private actualTitle: Locator;
    private categoryWomen: Locator;
    private dressCategory: Locator;
    private productTitle: Locator;
    private categoryMen: Locator;
    private topNavigationLinks: Locator;
    private womenDressTitleMessage: Locator;
    private tshirtsCategory: Locator;
    private productButtons: Locator;
    private signUpLoginButton: Locator;
    private loginTitle: Locator;
    private loginField: Locator;
    private passwordField: Locator;
    private loginButton1: Locator;
    private expectedLoginTitleText: Locator;
    constructor(page: Page) {
        this.page = page;
        this.topNavigationLinks = page.locator('div[class="shop-menu pull-right"] ul li');
        this.emailField = page.getByRole('textbox', { name: 'Your email address' });
        this.checkoutButton = page.locator('button[id="subscribe"]');
        this.actualTitle = page.locator('div[class="alert-success alert"]');
        this.categoryWomen = page.locator('a[href="#Women"]');
        this.dressCategory = page.locator('a[href="/category_products/1"]');
        this.womenDressTitleMessage = page.locator('h2[class="title text-center"]');
        this.categoryMen = page.locator('a[href="#Men"]');
        this.productTitle = page.locator('h2[class="title text-center"]');
        this.tshirtsCategory = page.locator('a[href="/category_products/3"]');
        this.productButtons = page.locator('a[href="/products"]');
        this.signUpLoginButton = page.locator('a[href="/login"]');
        this.loginTitle = page.getByRole('heading', { name: 'Login to your account' }); ///!!!!!!!!!!
        this.loginField = page.locator('input[data-qa="login-email"]');
        this.passwordField = page.locator('input[data-qa="login-password"]');
        this.loginButton1 = page.locator('button[data-qa="login-button"]');
        this.expectedLoginTitleText = page.getByText('Your email or password is');
    }
    async clickOnTopNavigationLink(linkText: string): Promise<void> {
        await this.topNavigationLinks.getByText(linkText).click();
    }
    async clickOnProduct(productName: string): Promise<void> {
        await this.page.click(`[data-product-name="${productName}"]`);
    }
    async scrollDownToFooter(): Promise<void> {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }
    async enterEmail(email: string): Promise<void> {
        await this.emailField.fill(email);
    }
    async clickOnCheckoutButton(): Promise<void> {
        await this.checkoutButton.click();
    }
    async verifyTitle(expectedTitle: string): Promise<void> {
        expect(this.actualTitle).toHaveText(expectedTitle);
    }
    async verifyProductsPageTitle(expectedProductTitle: string): Promise<void> {
        expect(this.productTitle).toHaveText(expectedProductTitle);
    }
    async clickVerifyCategoryWomen(): Promise<void> {
        await this.categoryWomen.click();
        await this.dressCategory.click();
    }
    async verifyWomenDressTitleMessage(message: string): Promise<void> {
        expect(this.womenDressTitleMessage).toHaveText(message);
    }
    async clickVerifyCategoryMen(): Promise<void> {
        await this.categoryMen.click();
        await this.tshirtsCategory.click();
    }
    async clickOnProductButtons(): Promise<void> {
        await this.productButtons.click();
    }
    async clickOnSignUpLoginButton(): Promise<void> {
        await this.signUpLoginButton.click();
    }
    async verifyLoginTitle(expectedLoginTitle: string): Promise<void> {
        this.loginTitle = this.page.getByRole('heading', { name: expectedLoginTitle });
        expect(this.loginTitle).toBeVisible();
        expect(this.loginTitle).toHaveText(expectedLoginTitle);
    }
    async enterLoginCredentials(email: string, password: string): Promise<void> {
        await this.loginField.fill(email);
        await this.passwordField.fill(password);
    }
    async clickOnLoginButton(): Promise<void> {
        await this.loginButton1.click();
    }
    async verifyUnsuccessfulLoginMessage(expectedLoginTitleText: string): Promise<void> {
        this.expectedLoginTitleText = this.page.getByText(expectedLoginTitleText);
        expect(this.expectedLoginTitleText).toBeVisible();
        expect(this.expectedLoginTitleText).toHaveText(expectedLoginTitleText);
    }
}



