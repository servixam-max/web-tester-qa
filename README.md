# EPAM Web Tester (Playwright)

A small end-to-end smoke test for the EPAM homepage client-work navigation.

## Run locally

```powershell
npm install
npx playwright install chromium
npm test
```

The test opens `https://www.epam.com/`, opens **Services**, follows **Explore Our Client Work**, and checks that **Client Work** is visible. Network restrictions or changes to the live site may affect the test result.
