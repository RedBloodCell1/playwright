// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("Iterate", async ({ page }) => {
  // Navigate to sauce demo
  await page.goto("https://github.com/RedBloodCell1");

  //   const repos = await page.$$(".repo");

  //   for (const repo of repos) {
  //     const text = await repo.textContent();
  //     console.log(text?.trim());
  //   }

  //   for (let i = 0; i<repos.length(); i++){

  //   }

  const repos2 = await page.locator(".repo");

  console.log(await repos2.nth(2).textContent());
});
