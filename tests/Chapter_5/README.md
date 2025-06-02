# Chapter 5 Notes

## Notes:

1. uncommand 3 lines of code in playwright.config.ts to use .env file // also dont forget to install env

import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(\_\_dirname, ".env") });

2. This is an important one. First if we wanna use a **test-data** where we import it to our test from **any source** , then we need to **declare the type of data** on the test for type safety purpose

3. To use CSV:

   - **npm install csv-parse**
   - import { parse } from "csv-parse/sync";
   - import fs from "fs";
   - import path from "path";

4. Use **forin** to iterate over key // Use **forof** to iterate over list

5. To use Excel:

   - **npm install xlsx**

6. **POM (Page Object Model)**:

   - object repository for web page elements
   - To put it simply, its a place to put a lot of variable for the web page elements
   - Every page has its own page class
   - This also contains methods for that particular page
   - For example, I have this login page, then i will have locator for inputting username and password. I also have the function for it.
   - This way, on my **tests file**, there will be only **test steps** that uses all the POM function by calling the page as an object

7. **npx playwright test --only-changed** = to run only changed file

8. To change viewport, look at playwright config file

## Connection Notes:

1. So in the **.env** we can put ENV variable so we can change data according to the ENV
2. So we are gonna have our test data inside a different folder which is the dev and qa folder
3. We also have this **interface** file in which we can put the **test data structure** inside the file
4. Any **helper** can be put on **utils** folder
5. Here we have **jsonHelper.ts** file in which simply by blackboxing, this helps us read the data from specified the directory.
