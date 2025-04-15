# Notes

## Folder Walkthrough:

1. **node_modules** = contains dependency details and inbuilt libraries
2. **x.spec.ts** = where you write your test cases

## How to:

1. To run test, just run it on testing legend
2. To debug test, we can add break point and do debug mode
3. To filter, use the filter button on the filter search

## Function:

1. test.step('Step Name', async()=>{
   this is for naming the step to make a readable report
   });

## Terminology Explanation:

1. **async** = to make function as an asynchronous function (will return resolve promised value or rejected with an exception details)
2. **await** = only within async function can we write await
3. **test** = used to define individual test (refer to _Function.1_)
4. **page** = browser page object (so page is an object that have a lot of method related to page like navigating to website and clicking something inside the website)
5. **expect** = matchers (assertion)
