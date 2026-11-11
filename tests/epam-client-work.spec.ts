import { test, expect } from '@playwright/test';

const EPAM_HOME = 'https://www.epam.com/';

// End-to-end smoke test for the client-work navigation from the EPAM homepage.
test('Services menu links to the visible Client Work page', async ({ page }) => {
  await page.goto(EPAM_HOME, { waitUntil: 'domcontentloaded' });

  // The header navigation may render an exact Services link or menu button.
  const services = page.getByRole('link', { name: 'Services', exact: true })
    .or(page.getByRole('button', { name: 'Services', exact: true }));
  await expect(services.first()).toBeVisible();
  await services.first().click();

  const clientWorkLink = page.getByRole('link', { name: 'Explore Our Client Work', exact: true });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page.getByText('Client Work', { exact: true }).first()).toBeVisible();
});
