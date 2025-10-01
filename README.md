# Automation Exercise - Playwright TypeScript Project

This project contains automated tests for the [Automation Exercise](https://automationexercise.com) website using Playwright with TypeScript.

## Project Structure

```
├── pages/                 # Page Object Models
│   ├── HomePage.ts       # Home page interactions
│   ├── LoginPage.ts      # Login/Signup page interactions
│   └── ProductsPage.ts   # Products page interactions
├── tests/                # Test files
│   ├── home.spec.ts      # Home page tests
│   ├── login.spec.ts     # Login functionality tests
│   └── products.spec.ts  # Products page tests
├── utils/                # Utility functions
│   └── testData.ts       # Test data generators and helpers
├── test-results/         # Test execution results (auto-generated)
├── playwright-report/    # HTML test reports (auto-generated)
├── playwright.config.ts  # Playwright configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npm run install:browsers
   ```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (with browser UI)
```bash
npm run test:headed
```

### Run tests with UI mode (interactive)
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests on specific browsers
```bash
npm run test:chrome    # Run on Chromium only
npm run test:firefox   # Run on Firefox only
npm run test:webkit    # Run on WebKit only
```

### View test reports
```bash
npm run report
```

## Configuration

The project is configured to:
- Run tests in parallel for faster execution
- Take screenshots on failure
- Record videos on failure
- Generate traces for failed tests
- Target the Automation Exercise website as base URL

You can modify these settings in `playwright.config.ts`.

## Page Object Model

This project uses the Page Object Model (POM) design pattern to organize test code:

- **HomePage**: Contains methods for interacting with the home page
- **LoginPage**: Contains methods for login and signup functionality
- **ProductsPage**: Contains methods for product browsing and searching

## Test Data

The `utils/testData.ts` file provides helper functions for generating:
- Random email addresses
- Random strings
- User registration data
- Date formatting utilities

## Writing New Tests

1. Create new test files in the `tests/` directory with `.spec.ts` extension
2. Import required page objects and utilities
3. Use Playwright's `test` and `expect` functions
4. Follow the existing test structure and naming conventions

Example:
```typescript
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('My New Tests', () => {
  test('should do something', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    // Add your test logic here
  });
});
```

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Automation Exercise Website](https://automationexercise.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)