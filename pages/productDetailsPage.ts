import { base } from "@faker-js/faker/.";
import { Page, Locator,expect} from "@playwright/test";
import { BasePage } from "./basePage";

export class ProductDetailsPage extends BasePage {
    categoryTitle: Locator
    availabilityTitle: Locator
    conditionTitle: Locator
    brandTitle: Locator
    quantityField: Locator
    constructor(page: Page) {
        super(page);
        this.categoryTitle = page.getByText('Category: Women > Tops')
        this.availabilityTitle = page.getByText('Availability:')
        this.conditionTitle = page.getByText('Condition:')
        this.brandTitle = page.getByText('Brand:')
        this.quantityField = page.getByText('Quantity:')
    }
    async verifyProductDetails(): Promise<void> {
        expect(this.categoryTitle).toBeVisible();
        expect(this.availabilityTitle).toBeVisible();
        expect(this.conditionTitle).toBeVisible();
        expect(this.brandTitle).toBeVisible();
        expect(this.quantityField).toBeVisible();
    }
}

