import { Locator, Page, expect } from '@playwright/test';
export class BasePage {
    page: Page;
    emailField: Locator;
    checkoutButton: Locator;
    actualTitle: Locator;
    categoryWomen: Locator;
    dressCategory: Locator;
    womenDressTitleMessage: Locator;
    categoryMen: Locator;
    private topNavigationLinks: Locator;
    constructor(page: Page) {
        this.page = page;
        this.topNavigationLinks = page.locator('div[class="shop-menu pull-right"] ul li');
        this.emailField = page.getByRole('textbox', { name: 'Your email address' });
        this.checkoutButton = page.locator('button[id="subscribe"]');
        this.actualTitle = page.locator('div[class="alert-success alert"]');
        this.categoryWomen = page.getByRole('link', { name: ' Women' });
        this.dressCategory = page.locator('a[href="/category_products/1"]');
        this.womenDressTitleMessage = page.getByRole('heading', { name: 'Women - Dress Products' })
        this.categoryMen = page.getByRole('link', { name: ' Men' })
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
        expect(this.actualTitle).toHaveText(expectedTitle);
    }
    async clickVerifyCategoryWomen(): Promise<void> {
        await this.categoryWomen.click();
    } async clickVerifyDressCategory(): Promise<void> {
        await this.dressCategory.click();
    } async verifyWomenDressTitleMessage(): Promise<void> {
        expect(this.womenDressTitleMessage).toBeVisible();
    } async clickVerifyCategoryMen(): Promise<void> {
        await this.categoryMen.click();
    }
    async verifyNavigationToCategory(category: string) {
        await this.page.waitForURL(`**/${category.toLowerCase()}`);
        const currentUrl = this.page.url();
        expect(currentUrl).toContain(category.toLowerCase());
    }
}







