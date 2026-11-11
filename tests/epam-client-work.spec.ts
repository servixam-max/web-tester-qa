import { test, expect } from '@playwright/test';

const EPAM_HOME = 'https://www.epam.com/';

// End-to-end smoke test for the client-work navigation from the EPAM homepage.
test('Services menu links to the visible Client Work page', async ({ page }) => {
  const response = await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });
  // Report a blocked homepage explicitly instead of hiding an upstream 403.
  expect(response, 'EPAM must respond to browser navigation').not.toBeNull();
  expect(response!.status(), 'EPAM homepage must be accessible, not blocked by WAF').toBeLessThan(400);

  // The header navigation may render an exact Services link or menu button.
  const services = page.getByRole('link', { name: 'Services', exact: true })
    .or(page.getByRole('button', { name: 'Services', exact: true }));
  await expect(services.first()).toBeVisible();
  // The Services item sits in EPAM's responsive hamburger menu.
  if (!(await services.first().isVisible().catch(() => false))) {
    await page.getByRole('button', { name: /menu/i }).click();
  }
  await services.first().click({ force: true });

  const clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page.getByText('Client Work', { exact: true }).first()).toBeVisible();
});
