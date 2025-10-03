import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginSignUpPage extends BasePage {
  private signUpLoginButton: Locator;
  private loginTitle: Locator;
  private loginField: Locator;
  private passwordField: Locator;
  private loginButton1: Locator;
  private expectedLoginTitleText: Locator;
  private loggedInAs: Locator;
  private deleteAccountButton: Locator;
  private deleteAccountMessage: Locator;
  private newUserSignUpTitle: Locator;
  private newUserLoginField: Locator;
  private newUserPasswordField: Locator
  private expectedNewUserSignUpTitle: Locator;
  constructor(page: Page) {
    super(page);
    this.signUpLoginButton = page.locator('a[href="/login"]');
    this.loginTitle = page.getByRole('heading', { name: 'Login to your account' }); ///!!!!!!!!!!
    this.loginField = page.locator('input[data-qa="login-email"]');
    this.passwordField = page.locator('input[data-qa="login-password"]');
    this.loginButton1 = page.locator('button[data-qa="login-button"]');
    this.expectedLoginTitleText = page.getByText('Your email or password is');
    this.loggedInAs = page.locator('i[class="fa fa-user"]');
    this.deleteAccountButton = page.locator('a[href="/delete_account"]');
    this.deleteAccountMessage = page.locator('h2[class="title text-center"]');
    this.newUserSignUpTitle = page.getByRole('heading', { name: 'New User Signup!' })
    this.newUserLoginField = page.locator('input[data-qa="signup-email"]');
    this.newUserPasswordField = page.getByRole('textbox', { name: 'Name' })
    this.expectedNewUserSignUpTitle = page.getByText('Email Address already exist!')

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
  }async verifySuccessfulLoginMessage(loggedInAsText: string): Promise<void> {
    this.loggedInAs = this.page.getByText(loggedInAsText);
    expect(this.loggedInAs).toBeVisible();
    expect(this.loggedInAs).toHaveText(loggedInAsText);
  } async clickOnDeleteAccountButton(): Promise<void> {
    await this.deleteAccountButton.click();
  }async verifyAccountDeletedMessage(expectedDeleteAccountMessage: string): Promise<void> {
    this.deleteAccountMessage = this.page.getByText(expectedDeleteAccountMessage);
    expect(this.deleteAccountMessage).toBeVisible();
    expect(this.deleteAccountMessage).toHaveText(expectedDeleteAccountMessage);
  }
  async verifyNewUserSignUpTitle(expectedNewUserSignUpTitle: string): Promise<void> {
    this.newUserSignUpTitle = this.page.getByText(expectedNewUserSignUpTitle);
    expect(this.newUserSignUpTitle).toBeVisible();
    expect(this.newUserSignUpTitle).toHaveText(expectedNewUserSignUpTitle);
  }
  async enterNewUserCredentials(email: string, password: string): Promise<void> {
    await this.newUserPasswordField.fill(password);
    await this.newUserLoginField.fill(email);

  }async clickOnNewUserSignUpButton(): Promise<void> {
    await this.loginButton1.click();
  }async verifyExistingEmailMessage(): Promise<void> {
   await this.expectedNewUserSignUpTitle.isVisible();
  }
}
