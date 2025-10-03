import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginSignUpPage extends BasePage {
  private signUpLoginButton: Locator;
  private loginTitle: Locator;
  private loginField: Locator;
  private passwordField: Locator;
  private loginButton1: Locator;
  private expectedLoginTitleText: Locator;
  constructor(page: Page) {
    super(page);
    this.signUpLoginButton = page.locator('a[href="/login"]');
    this.loginTitle = page.getByRole('heading', { name: 'Login to your account' }); ///!!!!!!!!!!
    this.loginField = page.locator('input[data-qa="login-email"]');
    this.passwordField = page.locator('input[data-qa="login-password"]');
    this.loginButton1 = page.locator('button[data-qa="login-button"]');
    this.expectedLoginTitleText = page.getByText('Your email or password is');
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
