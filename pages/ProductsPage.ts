import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  page: Page;
  searchInput: Locator;
  searchButton: Locator;
  allProductsTitle: Locator;
  allSearchedProducts: Locator;
  firstProduct: Locator;
  viewFirstProductButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: 'Search Product' });
    this.searchButton = page.getByRole('button', { name: '' });
    this.allProductsTitle = page.getByRole('heading', { name: 'All Products' })
    this.allSearchedProducts = page.getByRole('heading', { name: 'Searched Products' });
    this.firstProduct = page.locator('.product-overlay').first()
    this.viewFirstProductButton = page.locator('.nav.nav-pills.nav-justified > li > a').first()
  }

  async searchProduct(searchText: string): Promise<void> {
    await this.searchInput.fill(searchText);
    await this.searchButton.click();
  }
  async verifyAllProductsTitle(): Promise<void> {
    await this.allProductsTitle.isVisible();
  }
  async verifyAllSearchedProducts(): Promise<void> {
    const count = await this.allSearchedProducts.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(this.allSearchedProducts.nth(i)).toBeVisible();
    }
  } async viewFirstProduct(): Promise<void> {
    await this.viewFirstProductButton.click();
  }async clickOnFirstProduct(): Promise<void> {
    await this.firstProduct.click();
  }
}
