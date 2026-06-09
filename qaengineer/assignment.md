# QA Engineer — Hiring Assignment
### Role: QA Engineer (1-2 years work experience)
### Time Limit: 48 hours from receipt

---

## Context

You're joining a company that builds HR technology for the construction industry. The users are site managers, HR teams, and payroll operators managing blue-collar workforce — daily wage workers, shift-based crews, overtime-heavy schedules.

This isn't a "write test cases in a spreadsheet" role. We need someone who makes the entire team's output more reliable — by building automation that catches bugs before they ship, by translating product intent into testable specs before developers write a line of code, and by making quality a habit across the team, not an afterthought owned by one person.

This assignment simulates your actual job. You will work with an existing open-source HRMS codebase — not build from scratch. This tests what matters to us: can you read someone else's system, understand what needs protecting, build automation that actually prevents production bugs, and think about quality as a system — not a phase?

## Guidelines
1- You are encouraged to use AI Tools to complete this assignment.
2- You are expected to be able to explain every test you wrote and every quality decision you made during the interview.
3- We care about your quality thinking. Which tests you wrote matters less than why you wrote them and what you chose not to automate.
4- Every document you submit — test strategy, acceptance criteria, bug reports, negative testing report — will be cross-checked against the actual codebase you forked. If your test strategy names flows that don't exist in your HRMS, if your bug reports describe issues we can't reproduce, if your acceptance criteria could apply to any app on earth — that tells us more than the document itself.

---

## Setup

Pick any open-source HRMS with a React frontend and a backend (Node.js, Python, or similar). Fork it. Get it running locally.

**Suggested repo:** [MERN Employee Salary Management](https://github.com/berthutapea/mern-employee-salary-management) — React + Node/Express + MySQL. Payroll-focused, clean structure, good fit for this assignment.

You may use a different HRMS if you prefer — the tasks below are designed to work with any system that has employee/payroll functionality.

Set up your test automation tools:
- **E2E testing:** Playwright or Cypress (your choice)
- **API testing:** Any framework — supertest, Postman/Newman, pytest, your call
- **CI:** GitHub Actions

---

## Part 1: Test Automation — Employee Payroll Lifecycle

Build a complete test automation setup for the most critical flow in any HRMS: the employee payroll lifecycle. This is the flow that, if it breaks, means workers don't get paid correctly.

---

### 1. Test Strategy Document

Write a `test-strategy.md` in your repo root. One page, not twenty. Cover:

- **What are the 5 most critical flows in this HRMS?** Rank by business impact, not by page count.
- **For each flow:** What's the worst thing that happens if it breaks? Who gets hurt?
- **What you'll automate vs. test manually.** Not everything needs automation. Explain the tradeoff.
- **What you deliberately won't test, and why.** This tells us more about your judgment than what you do test.

The test strategy shows us whether you think about quality as risk management or as box-checking. A site manager's payslip being wrong is not the same severity as a CSS misalignment on the dashboard. Your strategy should reflect that.

**What we've seen from AI-generated test strategies:** *"Critical flows should be prioritized based on business impact and risk assessment. Automated regression testing should cover core functionality while exploratory testing addresses edge cases."* That paragraph applies to every software project ever built. It tells us nothing about your HRMS, your domain, or your thinking. Your strategy should name the actual screens, the actual API endpoints, the actual data flows in the HRMS you forked — and explain what breaks for a real construction company when each one fails. If we could swap your project name for any other project and the strategy still reads the same, it's not a strategy — it's a template.

---

### 2. E2E Test Suite

Playwright or Cypress tests for the core user journeys:

- **Employee onboarding:** Create a new worker with all required fields. Verify they appear in the employee list.
- **Profile update:** Change an employee's designation or salary. Verify the change persists and displays correctly.
- **Salary/payslip flow:** If the HRMS has payslip generation, test the end-to-end flow from salary data entry to payslip display. Verify the numbers are correct, not just that the page loads.
- **Employee exit:** Deactivate or delete an employee. Verify they're handled correctly downstream — removed from active lists, payroll stops, no orphan records.

Each test should have a clear name that describes the business scenario, not the technical action. `test('site manager can onboard a new mason and see them in the worker list')` tells us more than `test('POST /employees returns 201')`.

---

### 3. API Test Suite

Test the backend endpoints directly. Pick the salary or employee endpoints — whichever is most business-critical.

- **Happy path:** Valid inputs, expected outputs
- **Validation:** Missing required fields, invalid data types, boundary values (zero salary, negative numbers, extremely large values)
- **Business rules:** Whatever rules the HRMS enforces — duplicate detection, required relationships, value constraints
- **Error responses:** When something fails, does the API return a meaningful error or a stack trace? Document what you find.

---

### 4. Test Data Management

Tests that require manual setup before every run are useless in CI. Set up:
- Seed data scripts or test fixtures
- Cleanup between test runs (tests shouldn't depend on each other's state)
- Factory functions or builders if the setup is complex

---

### 5. CI Pipeline

GitHub Actions workflow:
- Runs on every push to main and on pull requests
- Starts the app (backend + database), runs all tests
- Generates a test report
- Pipeline fails if any test fails — green means safe to deploy

---

**Business context:** This HRMS serves construction companies where payroll errors directly affect blue-collar workers. A wrong salary calculation means a daily wage worker doesn't get what they earned. An employee record that silently disappears means someone's attendance isn't tracked. The test suite you build is the last line of defense before these errors reach the people who depend on the system working correctly.

---

## Part 2: Quality Blitz — 5 QA Tickets

**Scenario:** You've just joined the team. The developers have been shipping features fast. There's no QA process, no test coverage, no CI pipeline (well, now there is — you just built it in Part 1). These five tickets represent the first week of real QA work.

For each ticket: complete the work, commit with a clear message referencing the ticket number.

---

**TICKET QA-301: Product brief → acceptance criteria**

The product manager sends this message in Slack:

> "We need an overtime entry screen. Site managers should be able to log overtime for their workers at the end of each day — which worker, how many hours, what date, and a reason. This needs to work on mobile too since they'll enter it at the construction site."

That's the entire requirement. No spec, no wireframe, no edge cases discussed.

Your job — write a `specs/overtime-entry.md` file containing:
- Detailed acceptance criteria (what "done" looks like for a developer)
- Every edge case the PM didn't mention (max hours? past dates? duplicates? what if the worker doesn't exist? what happens at month-end when payroll runs?)
- Questions you'd ask the PM before development starts
- Test scenarios (Given/When/Then format) covering the happy path AND the edge cases
- What's a launch blocker vs. what can wait for v2

*This is the bridge between product and dev. If the acceptance criteria are vague, the developer builds the wrong thing and you both waste a sprint. If they're too rigid, the developer can't make sensible implementation choices. Find the middle ground that gives clarity without killing judgment.*

*A warning: AI-generated acceptance criteria are easy to spot. They're perfectly formatted, use all the right Given/When/Then syntax, and say things like "Given a valid user, when they submit the form, then the data should be saved successfully." That's a tautology, not a criterion. We're looking for the specific edge cases that prove you thought about construction payroll: what happens when the supervisor enters 7 hours but the worker already has 55 this month against a 60-hour cap? What happens when two supervisors at different sites log overtime for the same worker on the same day? What happens if the phone loses connectivity halfway through submission? Those scenarios come from understanding the domain and the humans, not from prompting "write acceptance criteria for an overtime form."*

---

**TICKET QA-302: Exploratory testing — find real bugs**

"The HRMS you forked is open-source and has been running for a while. But nobody has done systematic QA on it. Spend 45-60 minutes doing structured exploratory testing."

Your deliverable is a `bug-reports/` directory with one markdown file per bug found. Find at least 3 genuine bugs or quality issues — UI bugs, validation gaps, data integrity issues, broken flows, anything real.

Each bug report must have:
- **Title:** One line that tells a developer exactly what's wrong
- **Severity:** Critical / High / Medium / Low — with justification
- **Steps to reproduce:** Numbered, specific, anyone on the team can follow them
- **Expected behavior vs. actual behavior**
- **Impact:** Who gets hurt? What goes wrong downstream?
- **Root cause** (if you can identify it by reading the code)
- **Screenshot or screen recording** if the bug is visual

Then: pick the most critical bug and write an automated test that catches it. The test should fail against the current codebase (proving the bug exists) and would pass once a developer fixes it.

*We're not testing whether the open-source project is perfect — it's not. We're testing whether you can systematically find real issues and communicate them clearly enough that a developer can fix them without asking 5 follow-up questions.*

*We will clone your repo, run the application, and attempt to reproduce every bug you documented. If a bug report describes a "potential XSS vulnerability in the search field" but the app doesn't have a search field, or describes "incorrect calculation in payroll module" without specific numbers showing what's wrong, we'll know how the report was written. Real bugs have specific reproduction steps because you actually found them by clicking through the app and reading the code. AI-generated bug reports describe common vulnerability patterns for applications the AI has never seen running.*

---

**TICKET QA-303: Negative testing audit**

"Go through the app's forms and API endpoints. Try to break them."

Most developers test the happy path: fill in all fields correctly, click submit, done. Your job is to find out what happens when things go wrong:

- Submit empty forms. What happens?
- Enter special characters in text fields (`<script>alert('XSS')</script>`, `'; DROP TABLE employees; --`)
- Enter boundary values: 0, -1, 999999999, extremely long strings
- Submit the same form twice quickly (double-click the submit button)
- Send API requests with missing fields, wrong data types, extra unexpected fields
- Try to access pages or APIs that should require authentication without logging in

Write automated tests for the 5 most critical failures you find. Commit these tests along with a `negative-testing-report.md` that documents everything you tested, what passed, and what failed. **Include actual error messages, HTTP response codes, or screenshots from your testing.** A report that says "the form does not validate empty inputs" without showing the actual error (or lack of error) the app returned is a report written from imagination, not from testing.

*This ticket reveals your instinct. A QA engineer who only tests what's supposed to work will never catch what's supposed to fail gracefully.*

---

**TICKET QA-304: Regression suite for a critical data flow**

"Last sprint, a developer fixed a bug where editing an employee's salary didn't update their next payslip — the old salary kept showing up. The fix works, but there's no test to prevent it from coming back."

Write a regression test suite for the salary → payslip pipeline (or the equivalent data-dependency chain in your chosen HRMS). Don't stop at one test:

- Test the specific fix: salary change reflects in the payslip
- Test related scenarios: what about newly created employees? Employees with no salary record yet? Changing salary twice in the same pay period?
- Identify 2-3 other places in the codebase where the same class of bug could exist — a change in one entity not propagating to a dependent entity — and write tests for those too

Commit the regression suite with a message explaining what class of bug these tests protect against.

*A single regression test protects one fix. A regression suite protects a pattern. We want someone who sees the pattern.*

---

**TICKET QA-305: Quality gate for the deployment pipeline**

"The dev team currently deploys by pushing directly to main. There are no checks, no reviews, no automated tests in the pipeline. Twice this month, broken code reached production — once a missing environment variable crashed the app on startup, once a typo in an API route returned 404 on a critical payroll endpoint."

Design and implement a quality gate:

1. **GitHub Actions workflow:** Pre-merge checks that block merging if:
   - Any test fails
   - Linting fails (set up a linter if the project doesn't have one)
   - The build doesn't compile or start

2. **Smoke test suite:** Write 3-5 fast tests that verify the app boots correctly and critical endpoints respond. These are the "did we break something fundamental" checks that run in seconds.

3. **Branch protection documentation:** In your README, document the branch protection settings you'd configure on this repo:
   - Require pull request reviews before merging
   - Require status checks to pass before merging
   - Block direct pushes to main

4. **Quality process guide:** Write a `## Quality Process` section in README that explains to a new developer joining the team:
   - How to run tests locally before pushing
   - What CI checks and why
   - What to do when CI fails
   - How to write a test for a new feature (point to your existing tests as examples)

*This ticket is about making quality a team habit, not a personal one. Anybody can test their own code. Building a system where the team can't accidentally ship broken code — that's quality engineering.*

---

## Evaluation Criteria

| What we evaluate | What we're looking for |
|---|---|
| **Quality thinking** | Your test strategy and test selection reveal whether you think about quality as risk management or box-checking. Testing the payslip calculation before testing a button's hover color shows judgment |
| **Product-dev bridge** | QA-301 is the core of this assignment. Can you take a vague Slack message and turn it into something a developer can build against and a PM can sign off on? This skill prevents more bugs than any test suite |
| **Automation that works** | Real tests that run in CI and catch real issues. Not a framework with placeholder tests. Not 50 tests that all check the same thing in slightly different ways |
| **Bug-finding instinct** | QA-302 and QA-303 show whether you can break software systematically. Finding bugs is easy. Finding the ones that matter, documenting them so they get fixed, and writing tests so they never come back — that's the job |
| **Process thinking** | QA-305 shows whether you understand quality as a system. One QA engineer can't manually test every deployment. A quality gate means the system enforces what used to depend on individual diligence |
| **Code reading ability** | You explored an unfamiliar codebase, understood how it works, found what's fragile, and built protection around it. You didn't rewrite the project — you made it safer |
| **Communication** | Bug reports a developer can act on without follow-up questions. Acceptance criteria that don't need a meeting to interpret. A test strategy that justifies its priorities |
| **AI usage** | We expect you to use AI tools (Claude, Copilot, etc.). Tell us which ones and how. No penalty for using AI. Penalty for not using it. But also: penalty for submitting AI output you didn't verify against your actual codebase. We cross-check every deliverable against the repo you submitted. Generic documents that could describe any project are treated the same as empty submissions |

---

## The Hand-Drawn Mind Map (MANDATORY)

> **In addition to the code submission, you must send a hand-drawn mind map directly in the Internshala chat window.**

> This mind map should show how you think about this role. Not a test plan. Not a list of tools. Your thought process — how psychology, business, and technology connect in quality engineering for this specific domain.

> The center is the role: QA Engineer for construction HR technology. The branches should show three interlocking dimensions:
>
> **Psychology** — Who uses this system? What do they fear? What do they trust? A site supervisor entering overtime on a phone after a 12-hour shift in the sun. A payroll operator who needs month-end numbers to be right because 200 workers depend on that number. A developer who ships fast and doesn't want to be gatekept. How do these people shape your quality decisions?
>
> **Business** — What's at stake when quality fails here? Payroll errors aren't just bugs — they affect real wages, real families. The 60-hour overtime cap exists for cost control. The company is scaling from 2 construction sites to 8. What breaks at scale? What's the cost of a missed bug in this domain vs. a consumer app?
>
> **Technology** — What do you automate and why? Where does CI help? Where is manual testing still the right call? How does your test strategy connect to the business risks and the human behaviors you identified?
>
> **The key is the connections between these three.** A mind map with three disconnected branches labeled "psychology," "business," and "tech" is just three lists. We want to see the links: the psychology of the user drives what you test, the business stakes drive what you test first, and the technology choices serve both.

> ### What a strong mind map looks like
>
> *A node says "mason's daily wage depends on this payslip being correct" (business) → connects to "salary calculation is test priority #1, not dashboard layout" (tech decision) → connects to "worker trusts the printed number — wrong amount isn't a UI bug, it's broken trust" (psychology). Another path: "supervisor enters overtime on phone at dusty construction site after a 12-hour shift" (psychology) → "form must handle fat-finger mistakes without losing data" (tech) → "if overtime entry is wrong, payroll downstream is wrong for every worker on that site" (business). The three dimensions aren't separate sections — they feed each other. Every technology choice traces back to a human consequence and a business risk.*

> ### What a weak mind map looks like
>
> *Center says "QA Engineer." Branches say "Selenium," "Cypress," "Jest," "CI/CD," "Bug Tracking," "90% code coverage." Maybe a branch for "Agile Testing Quadrants" or "Test Pyramid." It's a catalog of testing tools and textbook frameworks. No mention of who uses this system or what happens when quality fails in construction payroll specifically. No connection between a technology choice and a human consequence. You could paste this mind map into any QA assignment for any company and it would look exactly the same. That's how we know the thinking isn't there.*

> It doesn't need to be beautiful. It needs to show that you understand why quality engineering in construction HR technology is different from quality engineering in a food delivery app. The humans are different, the stakes are different, and your quality decisions should reflect that.

> **This is not optional. Applications without a hand-drawn mind map in the Internshala chat will not be reviewed.**

> Why we require this: most applicants use AI to generate impressive-sounding test strategies and automation scripts without understanding quality engineering. A hand-drawn mind map is the fastest way for us to tell whether you think about quality as a blend of people, business, and technology — or just write tests. It takes 15 minutes to draw if you've genuinely internalized what you built. It's impossible to fake if you haven't.

---

## Submission

1. Push your fork to a public GitHub repo
2. README must include:
   - Setup instructions (we will clone your repo, run your tests, and verify the CI pipeline)
   - Which HRMS you chose and why (one line)
   - Which AI tools you used and for what
   - Quality process section (from QA-305)
   - Test coverage summary: what's tested, what's not, and why
3. Commits should be atomic — one per ticket (QA-301 through QA-305), separate commits for Part 1 (framework setup, E2E tests, API tests, CI pipeline)
4. Include `test-strategy.md` at repo root
5. Include `specs/overtime-entry.md` (from QA-301)
6. Include `bug-reports/` directory with individual bug report files (from QA-302)
7. Include `negative-testing-report.md` (from QA-303)
8. **Hand-drawn mind map** (psychology × business × technology): photo sent in Internshala chat window
9. Send the repo link within 48 hours

---

*Assignment designed by DeepThought, June 2026*
