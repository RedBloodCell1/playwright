# Notes

## Learning Source:

1. https://youtu.be/788GvvcfwTY?si=SGf9GnujvGlJNlq4 (#1 Playwright Automation Using TypeScript Full Course 2025 | Playwright TypeScript Beginner Tutorial)

## Folder Walkthrough:

1. **node_modules** = contains dependency details and inbuilt libraries
2. **x.spec.ts** = where you write your test cases

## How to:

1. To run test, just run it on testing page (On vscode)
2. To debug test, we can add break point and do debug mode
3. To filter, use the filter button on the filter search
4. **npx playwright test "location" --project='browser'** = to run specific spec in playwright
5. To attach screenshot, change **screenshot** default value on config.ts file on **use**

## Important Things to notes of:

1. Use pick locator from playwright (Its OP)
2. User record at cursor from playwright (Its OP)

## Function:

1. test.step('Step Name', async()=>{
   this is for naming the step to make a readable report
   });

2. **page.goto("")** = to go to a URL
3. **page.getByPlaceholder()** = to get an element by the placeholder
4. **page.fill()** = to input text
5. **expect(something).tosomething("something")** = to assert
6. **expect("Something").toBeEnabled()** = To check whether the things is displayed or not
7. **page.waitForTimeout()** = To wait
8. **expect(page).toHaveTitle()** = To assert title

## Terminology Explanation:

1. **async** = to make function as an asynchronous function (will return resolve promised value or rejected with an exception details)
2. **await** = only within async function can we write await
3. **test** = used to define individual test (refer to _Function.1_)
4. **page** = browser page object (so page is an object that have a lot of method related to page like navigating to website and clicking something inside the website)
5. **expect** = matchers (assertion)

## Locators:

1. **By Role** = button, link, etc
2. **By Label** = aria-label
3. **By Alt attribute (Images)** = self explanatory
4. **By Test Id** = To use custom test id, we need to specify **testIdAttribute: 'attribute name'** to the config.ts file on **use**
5. **By Text** = = self explanatory
6. **By Placeholder** = = self explanatory
7. **By Xpath** = use page.locator and the parameter just use the xpath
8. **CSS selector** = use page.locator
9. **By Title** = title

## Hooks:

1. **beforeAll()** = Code will be executed before all test case
2. **beforeEach()** = Code will be executed before each test case
3. **afterEach()** = Code will be executed after each test case
4. **afterAll()** = Code will be executed after all test case

## Load, Stress, and Performance Testing:

1. To put it simply, if many user use our system at the same time, can it still work well or not
2. K6 convert javascript -> go for faster run
