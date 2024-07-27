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

  test("Todo page buttons functionality", async ({ page }) => {
    await page.goto("http://localhost:5173");
  });
});
