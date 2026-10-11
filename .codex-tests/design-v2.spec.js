const { test, expect } = require("@playwright/test");

const route = "http://127.0.0.1:3000/portafolio/diseno";

async function assertPortfolio(page) {
  await page.goto(route, { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1, name: "Diseño." })).toBeVisible();
  await expect(page.getByText("MCI Tampa Bay", { exact: true })).toBeVisible();

  const identityNames = await page
    .locator("section#identidad-visual figure figcaption strong")
    .allTextContents();
  expect(identityNames).toEqual(["Corason", "Nitro", "Saeyut", "Terrado"]);

  const english = page.getByRole("button", { name: "English" });
  await english.click();
  await expect(english).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByText("Adaptación de mensaje / English")).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);
}

test("portfolio renders on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await assertPortfolio(page);
  await page.screenshot({
    path: "test-results/design-desktop.png",
    fullPage: true,
  });
});

test("portfolio renders on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await assertPortfolio(page);
  await page.screenshot({
    path: "test-results/design-mobile.png",
    fullPage: true,
  });
});
