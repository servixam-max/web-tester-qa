# EPAM Web Tester (Playwright)

A small end-to-end smoke test for the EPAM homepage client-work navigation.

## Run locally

```powershell
npm install
npx playwright install chromium
npm test
```

The test opens `https://www.epam.com/`, selects **Services**, clicks **Explore Our Client Work**, and verifies visible **Client Work** text. EPAM is protected by a web application firewall in some environments; when blocked (for example HTTP 403), rerun from an approved browser/network. A blocked run is reported as a failure and is not treated as a pass.
