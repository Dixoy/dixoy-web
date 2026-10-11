/* eslint-disable @typescript-eslint/no-require-imports */
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

async function captureSections(page, viewportName) {
  await page
    .locator("#diseno-redes .projectMeta")
    .evaluate((element) => element.scrollIntoView());
  await page.waitForTimeout(600);
  await page.screenshot({
    path: `test-results/design-${viewportName}-mci.jpg`,
    type: "jpeg",
    quality: 32,
  });

  await page
    .locator("#identidad-visual")
    .evaluate((element) => element.scrollIntoView());
  await page.waitForTimeout(800);
  await page.screenshot({
    path: `test-results/design-${viewportName}-identity.jpg`,
    type: "jpeg",
    quality: 32,
  });
}

test("portfolio renders on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await assertPortfolio(page);
  await captureSections(page, "desktop");
});

test("portfolio renders on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await assertPortfolio(page);
  await captureSections(page, "mobile");
});
