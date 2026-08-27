import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const page = await browser.newPage({
  viewport: { width: 1024, height: 912 },
  deviceScaleFactor: 2,
});
await page.goto("file:///Users/jonahelliott/WORKSPACE/Osanwe/tmp/round-2-therapy-deck/product-concept.html");
await page.screenshot({
  path: "/Users/jonahelliott/WORKSPACE/Osanwe/tmp/round-2-therapy-deck/product-concept.png",
  fullPage: true,
});
await browser.close();
