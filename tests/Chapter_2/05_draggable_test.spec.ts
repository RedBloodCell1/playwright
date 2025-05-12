// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("Handling iframes (draggable)", async ({ page }) => {
  // Go to URL
  await page.goto("https://jqueryui.com/droppable/");

  // iframe
  const iframe = page.frameLocator('[class="demo-frame"]');

  // drag element
  const dragElement = iframe.locator("[id = draggable]");

  // drop element
  const dropElement = iframe.locator("[id = droppable]");

  // drag and drop
  await dragElement.dragTo(dropElement);
});
