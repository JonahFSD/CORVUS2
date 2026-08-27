import { expect, test } from "@playwright/test";

test("Maya controls a source-linked path from AI disclosure to human handoff", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Tell your story once." })).toBeVisible();
  await expect(page.getByText("Synthetic product demo")).toBeVisible();
  await page.getByRole("button", { name: "Build my manifest" }).click();

  await expect(page.getByRole("heading", { name: "Review what Corvus understood" })).toBeVisible();
  await expect(page.getByText("Not a diagnosis")).toBeVisible();

  await page.getByRole("button", { name: "Edit What happened" }).click();
  await page
    .getByRole("textbox", { name: "Edit What happened" })
    .fill("A move, a breakup, anxiety at work, and poor sleep.");
  await page.getByRole("button", { name: "Save What happened" }).click();

  await page.getByRole("button", { name: "Approve What happened" }).click();
  await page.getByRole("button", { name: "Approve What Maya wants" }).click();
  await page.getByRole("button", { name: "Approve What matters for care" }).click();
  await page.getByRole("button", { name: "Find eligible therapists" }).click();

  await expect(page.getByRole("heading", { name: "Choose who feels right" })).toBeVisible();
  await expect(page.getByText("Why this match").first()).toBeVisible();
  await page.getByRole("button", { name: "Choose Lena Brooks" }).click();

  await expect(page.getByRole("heading", { name: "Preview the handoff" })).toBeVisible();
  await expect(page.getByText("A move, a breakup, anxiety at work, and poor sleep.")).toBeVisible();
  await expect(page.getByText("Nothing is shared until Maya confirms.")).toBeVisible();
  await page.getByRole("button", { name: "Confirm handoff" }).click();

  await expect(
    page.getByRole("heading", { name: "Ready for the first conversation" }),
  ).toBeVisible();
  await expect(page.getByText("Maya starts with a human.")).toBeVisible();
});

test("the opening story remains readable at a narrow mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const mobileLayout = await page.evaluate(() => {
    const heading = document.querySelector<HTMLHeadingElement>(".story-copy h1");
    const progress = document.querySelector<HTMLElement>(".progress");
    const progressItems = Array.from(document.querySelectorAll<HTMLElement>(".progress-item"));

    if (!heading || !progress) {
      throw new Error("Expected the story heading and progress tracker");
    }

    const progressBounds = progress.getBoundingClientRect();

    return {
      headingClientHeight: heading.clientHeight,
      headingScrollHeight: heading.scrollHeight,
      progressItemsFit: progressItems.every((item) => {
        const bounds = item.getBoundingClientRect();
        return bounds.left >= progressBounds.left && bounds.right <= progressBounds.right;
      }),
    };
  });

  expect(mobileLayout.headingScrollHeight - mobileLayout.headingClientHeight).toBeLessThanOrEqual(
    8,
  );
  expect(mobileLayout.progressItemsFit).toBe(true);
});
