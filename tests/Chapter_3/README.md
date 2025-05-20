# Chapter 3 Notes

## Function:

1. **test.skip()** = to skip a test
2. **test.only()** = to test only that test
3. **test.describe()** = to group a test
4.

## Notes:

1. You can add **tag** inside a **test()**.
2. **-grep "Tag name"** = run on terminal to run only the tag
3. **--repeat-each=2** = to run more than one time to check stability
4. **retries: process.env.CI ? 2 : 0,** = First parameter is for CICD and second parameter is for local execution
5. You can write expect{timeout:"milisec"} on config file to set the assertion timeout. Or you can set the individual timeout inside the assertion itself.
