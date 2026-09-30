# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: leave.spec.ts >> Apply leave shows message when no leave balance available 
- Location: tests\leave.spec.ts:6:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('No Leave Types with Leave Balance')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('No Leave Types with Leave Balance') with timeout 15000ms
  - waiting for getByText('No Leave Types with Leave Balance')

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Leave" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Demo Source
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem:
        - link "Apply":
          - /url: "#"
      - listitem:
        - link "My Leave":
          - /url: "#"
      - listitem: Entitlements 
      - listitem: Reports 
      - listitem: Configure 
      - listitem:
        - link "Leave List":
          - /url: "#"
      - listitem:
        - link "Assign Leave":
          - /url: "#"
      - button ""
- heading "Apply Leave" [level=6]
- separator
- text: Leave Type* -- Select --  Leave Balance
- paragraph: 0.00 Day(s)
- text: From Date*
- textbox "yyyy-dd-mm"
- text:  To Date*
- textbox "yyyy-dd-mm"
- text:  Comments
- textbox
- separator
- paragraph: "* Required"
- button "Apply"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | import {test, expect} from '../src/fixtures/authFixture';
  2  | import { LeavePage } from '../src/pages/LeavePage';
  3  | 
  4  | 
  5  | //test scenario: 
  6  | test("Apply leave shows message when no leave balance available ", async({loggedInPage})=>{
  7  |     const leavePage = new LeavePage(loggedInPage);
  8  | 
  9  |     await leavePage.goToLeave();
  10 |     await leavePage.goToApply();
  11 | 
> 12 |     await expect(loggedInPage.getByText('No Leave Types with Leave Balance')).toBeVisible({timeout: 15000});
     |                                                                               ^ Error: expect(locator).toBeVisible() failed
  13 | })
```