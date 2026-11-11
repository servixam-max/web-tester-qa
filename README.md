# EPAM Web Tester (Playwright)

Automated end-to-end smoke test for the EPAM homepage client-work navigation, built with Playwright Test and TypeScript.

## Scenario

1. Open `https://www.epam.com/`.
2. Select **Services** in the header navigation.
3. Follow **Explore Our Client Work**.
4. Verify that **Client Work** is visible.

## Run locally

```powershell
npm ci
npx playwright install chromium
npm test
```

If EPAM or the local network returns an access-denied/WAF response (such as HTTP 403), the test should fail visibly; do not count a blocked run as a pass.
