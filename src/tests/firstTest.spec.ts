import { test, expect } from "@playwright/test";

test.describe("Todo page", () => {
  test("Todo page ui and functionality test", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await expect(page).toHaveTitle("Todo App");

    await expect(page.getByRole("heading", { name: "T O D O" })).toBeVisible();
    await expect(page.getByPlaceholder("Create a new todo")).toBeVisible();
    await expect(page.getByRole("button", { name: "All" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Active" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Completed" })).toBeVisible();
  });

  test("Todo input testing", async ({ page }) => {
    await page.goto("http://localhost:5173");
    const todoInput = page.getByTestId("todo-input");

    // Ensure the input is empty initially
    await expect(todoInput).toBeEmpty();

    // Add the first todo item
    await todoInput.fill("First Todo");
    await todoInput.press("Enter");
    let allItemsText = await page.getByTestId("all-items-text");
    await expect(allItemsText).toHaveText("All items - 1");
    let todosArrLength = await page.evaluate(() => {
      return window.getTodosArr().length;
    });
    expect(todosArrLength).toBe(1);

    // Add the second todo item
    await todoInput.fill("Second Todo");
    await todoInput.press("Enter");
    allItemsText = await page.getByTestId("all-items-text");
    await expect(allItemsText).toHaveText("All items - 2");
    todosArrLength = await page.evaluate(() => {
      return window.getTodosArr().length;
    });
    expect(todosArrLength).toBe(2);
  });

  test("clear all button testing", async ({ page }) => {
    await page.goto("http://localhost:5173");

    const clearAllButton = await page.waitForSelector(
      '[data-testid="clear-all"]'
    );

    const allItemsText = await page.getByTestId("all-items-text");

    await clearAllButton.click();

    const todosArrLength = await page.evaluate(() => {
      return window.getTodosArr().length;
    });

    expect(todosArrLength).toBe(0);
    await expect(allItemsText).toHaveText("All items - 0");
  });
});
