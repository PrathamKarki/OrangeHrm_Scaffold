# OrangeHRM UI Automation Testing Using Playwright

A UI test automationn framework built with Playwright and Typescript, targeting the OrangeHRM demo application. This project is focused on demonstarting solid automation fundamentals locators, assertions, the Page object model, fixtures and reporting.

## Tech Stack
- Playwright + TypeScript
- Node.js / npm
- Playwright Test Runner
- Playwright HTML Reporter
- Allure Report (planned)
- Git / GitHub


## Application Under Test
[OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/) — an open-source Human Resource Management System.
Testing covers Authentication, Employee Management (PIM), and Leave modules.

## Project Structure
```text
OrangeHrm_Scaffold/
├── src/
│   ├── pages/            # Page Object classes 
│   ├── fixtures/         # Custom Playwright fixtures 
│   └── utils/            # Shared test data 
├── tests/                # Test spec files 
├── playwright.config.ts  # Playwright configuration
├── package.json
├── tsconfig.json
└── .gitignore
```

## Installation
1. Clone this repository
   \`\`\`
   git clone https://github.com/PrathamKarki/OrangeHrm_Scaffold.git
   cd OrangeHrm_Scaffold
   \`\`\`
2. Install dependencies
   \`\`\`
   npm install
   \`\`\`
   Note: This project uses your locally installed Google Chrome (via Playwright's  `channel` option) instead of Playwright's bundled browsers. Ensure Chrome is installed on your machine.


## Running Tests
Run the entire test suite:
\`\`\`
npx playwright test
\`\`\`

Run tests in headed mode (visible browser window):
\`\`\`
npx playwright test --headed
\`\`\`

Run a specific test file:
\`\`\`
npx playwright test login
npx playwright test employee
npx playwright test leave
\`\`\`

Run a specific test by name:
\`\`\`
npx playwright test --grep "Successful login"
\`\`\`


## Reports
After a test run, view the Playwright HTML report:
\`\`\`
npx playwright show-report
\`\`\`

## Allure Report
Generate and view the Allure report after running tests:
\`\`\`
npx allure-commandline generate allure-results --clean -o allure-report
npx allure-commandline open allure-report
\`\`\`

Allure provides a richer, more detailed view of test results compared to the standard 
Playwright HTML report, including categorized results and historical trends.
## Automated Scenarios

### Authentication
- Successful login with valid credentials
- Login with invalid credentials (error message validation)
- Login with empty fields (required field validation)
- Logout

### Employee Management (PIM)
- Add a new employee
- Employee List page loads successfully
- Search for an existing employee
- View an employee's Personal Details page

### Leave
- Apply Leave shows appropriate message when no leave balance is available


## QA Concepts Demonstrated

- **Positive and negative testing** — valid login vs. invalid login vs. empty-field validation
- **Page Object Model (POM)** — separating locators/actions (in `src/pages/`) from test logic (in `tests/`)
- **Custom fixtures** — a `loggedInPage` fixture to remove repeated login setup across tests
- **Centralized test data** — credentials and reusable values kept in `src/utils/testData.ts`
- **Locator strategy** — preferring accessible, role/text-based locators (`getByRole`, `getByPlaceholder`, `getByText`) over fragile CSS/XPath selectors where possible
- **Handling ambiguous locators** — resolving Playwright "strict mode violations" using `.first()` and role-based disambiguation
- **Test isolation** — each test independently sets up its own required state via fixtures


## Limitations

- Tests run against a shared, public OrangeHRM demo instance rather than a private/local environment. Response times can vary significantly depending on server load, which occasionally causes timeouts despite configured retries and extended timeouts.
- The "Search Employee" and "View Employee Details" tests rely on a specific, pre-existing demo record ("Peter Mac Anderson"), which is shared with other users of the public demo and could theoretically be modified by someone else.
- Add Employee and Apply Leave tests were validated through careful manual and  automated debugging, but occasionally experience flakiness tied to demo server performance rather than application or test logic issues.


## Future Improvements

- Add Allure reporting for richer test result visualization
- Introduce data-driven testing for login scenarios (multiple credential sets via a single test)
- Add API-level setup/teardown to avoid dependency on shared UI data (e.g., creating 
  test employees via API rather than the UI, then cleaning them up after tests run)
- Expand coverage to additional stable modules (e.g., Leave List filtering) if 
  demo server reliability improves
