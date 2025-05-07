import { test } from "@playwright/test";

test.beforeAll(async () => {
  console.log("BEFORE ALL");
});

test.beforeEach(async () => {
  console.log("BEFORE EACH");
});

test.afterEach(async () => {
  console.log("AFTER EACH");
});

test.afterAll(async () => {
  console.log("AFTER ALL");
});

test("Hooks", async ({ page }) => {
  console.log("START1");
});

test("Hooks2", async ({ page }) => {
  console.log("START2");
});

//Expected: all, bef, s1, aft, bef, s2, aft, all
