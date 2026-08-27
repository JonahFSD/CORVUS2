import { expect, test } from "@playwright/test";

test("one click runs the complete stage story in thirty seconds", async ({ page }) => {
  await page.goto("/");
  await page.clock.install();

  await page.getByRole("button", { name: "Run 30-second demo" }).click();
  await expect(page.getByText("30 seconds remaining")).toBeVisible();

  await page.clock.fastForward(5_000);
  await expect(page.getByRole("heading", { name: "Your story, structured." })).toBeVisible();
  await expect(page.getByText("Source linked").first()).toBeVisible();
  await expect(page.getByText("Maya changed panic → anxiety")).toBeVisible();
  await expect(page.locator(".manifest-card").first().getByText("proposed")).toBeVisible();

  await page.clock.fastForward(1_000);
  await expect(page.locator(".manifest-card").first().getByText("approved")).toBeVisible();

  await page.clock.fastForward(8_000);
  await expect(page.getByRole("heading", { name: "Two people fit the facts." })).toBeVisible();
  await expect(page.getByText("Lena Brooks, LCSW")).toBeVisible();

  await page.clock.fastForward(7_000);
  await expect(
    page.getByRole("heading", { name: "Nothing gets lost in the handoff." }),
  ).toBeVisible();
  await expect(page.getByText("Not a diagnosis or treatment recommendation.")).toBeVisible();

  await page.clock.fastForward(8_000);
  await expect(
    page.getByRole("heading", { name: "Nothing gets lost in the handoff." }),
  ).toBeVisible();

  await page.clock.fastForward(1_000);
  await expect(
    page.getByRole("heading", { name: "Ready for the first conversation" }),
  ).toBeVisible();
  await expect(page.getByText("Maya does not start from zero.")).toBeVisible();
  await expect(page.getByRole("button", { name: "Replay 30-second demo" })).toBeVisible();
});

test("restart safely begins a fresh autonomous run", async ({ page }) => {
  await page.goto("/");
  await page.clock.install();
  await page.getByRole("button", { name: "Run 30-second demo" }).click();
  await page.clock.fastForward(14_000);
  await expect(page.getByRole("heading", { name: "Two people fit the facts." })).toBeVisible();

  await page.getByRole("button", { name: "Restart" }).click();

  await expect(page.getByText("30 seconds remaining")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "She already said the hard part." }),
  ).toBeVisible();
});

test("every autonomous stage avoids horizontal overflow", async ({ page }) => {
  const assertNoOverflow = async () => {
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
  };

  for (const viewport of [
    { width: 1280, height: 720 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await page.clock.install();
    await page.getByRole("button", { name: "Run 30-second demo" }).click();
    await assertNoOverflow();

    for (const advance of [5_000, 9_000, 7_000, 9_000]) {
      await page.clock.fastForward(advance);
      await assertNoOverflow();
    }
  }
});

test("Maya controls a source-linked path from AI disclosure to human handoff", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Tell your story once." })).toBeVisible();
  await expect(page.getByText("SYNTHETIC DEMO")).toBeVisible();
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
    const progress = document.querySelector<HTMLElement>(".stage-timeline");
    const progressItems = Array.from(
      document.querySelectorAll<HTMLElement>(".timeline-labels > span"),
    );

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
