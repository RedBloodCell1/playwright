# Chapter 4 Notes

## Function:

1. **page.once('dialog', (dialog))** = to handle alert because playwright automatically close alert

## Notes:

1. if we configure **tsconfig.json**, it will be easier to set the behaviours of certain things
2. Just use **--last-failed** to run last failed test
3. **workers: process.env.CI ? 1 : undefined** = same also, first is pipeline cicd and second is local // Or we can just use --worker "num"
4. use **$$** as locator to get all value
