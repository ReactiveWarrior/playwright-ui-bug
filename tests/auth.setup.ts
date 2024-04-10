import { expect, test as setup } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("http://localhost:1234/");
  await expect(page).toHaveURL("http://localhost:1234/");

  await page.context().storageState({ path: authFile });
});
