import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginSignUpPage extends BasePage {
  private signUpTitle: Locator;
  private readonly expectedSignUpTitleText: string = 'New User Signup!';
  constructor(page: Page) {
    super(page);
    this.signUpTitle = page.getByRole('heading', { name: 'New User Signup!' });
  }
  async validateSignUpTitle(): Promise<void> {
    expect(this.signUpTitle).toBeVisible();
    expect(this.signUpTitle).toHaveText('New User Signup!');
  }
}

