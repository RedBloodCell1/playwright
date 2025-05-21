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
