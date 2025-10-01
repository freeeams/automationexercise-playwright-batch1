import { Locator, Page, expect } from '@playwright/test';
export class BasePage {
    page: Page;
    emailField: Locator;
    checkoutButton: Locator;
    actualTitle: Locator;
    private topNavigationLinks: Locator;
    constructor(page: Page) {
        this.page = page;
        this.topNavigationLinks = page.locator('div[class="shop-menu pull-right"] ul li');
        this.emailField = page.getByRole('textbox', { name: 'Your email address' });
        this.checkoutButton = page.getByRole('button', { name: '' });
        this.actualTitle =page.locator('class="alert-success alert"')
    }

    async clickOnTopNavigationLink(linkText: string): Promise<void> {
        await this.topNavigationLinks.getByText(linkText).click();
    } async clickOnProduct(productName: string): Promise<void> {
        await this.page.click(`[data-product-name="${productName}"]`);
    }
    async scrollDownToFooter(): Promise<void> {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    } async enterEmail(email: string): Promise<void> {
        await this.emailField.fill(email);
    }
    async clickOnCheckoutButton(): Promise<void> {
        await this.checkoutButton.click();
    }
    async verifyTitle(expectedTitle: string): Promise<void> {
        const actualTitle = await this.page.title();
        expect(actualTitle).toBe(expectedTitle);
    }

}





