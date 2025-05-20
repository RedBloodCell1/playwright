# CHAPTER 2 NOTES

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

## Function:

1. For dropdown, we can use **selectOption("1")** to select an option from a dropdown value attribute
2. We can do drag and drop by using **dragElement.dragTo(dropElement)**. dragElement and dropElement = variable. But remember if the drag and drop is inside **iframe**, then we need to locate the iframe first using **frameLocator()** and assign it to a const so then the drag and drop element can be located inside the iframe
3. **click({button:'left/middle/right'})** or **dblclick()** = Self explanatory
4. **.press("Enter")** = to perform keyboard action

## Assertion:

1. **Hard Assertion** = Stop when failed test case

   - toBeEditable()
   - toBeVisible()
   - toBeEnabled()
   - toBeEmpty()
   - toHaveURL()
   - toHaveTitle()
   - toHaveText()
   - toHaveCount()
   - toBeDisabled()

2. **Soft Assertion** = Stop in the end (just put **expect.soft()**)

## Notes:

1. So UI automation is simply about picking a good locator and then clicking it
2. When we enable watch mode (Continous run in testing tab), it will run automatically when there is a file changes
3. **Trace** in playwright so you can manage your report
