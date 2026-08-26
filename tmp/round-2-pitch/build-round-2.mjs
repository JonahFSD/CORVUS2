import fs from "node:fs/promises";
import {
  Presentation,
  PresentationFile,
} from "@oai/artifact-tool";

const OUT_DIR = "/Users/jonahelliott/WORKSPACE/Osanwe/tmp/round-2-pitch/rendered";
const FINAL_PPTX = "/Users/jonahelliott/WORKSPACE/Osanwe/docs/pitch/round-2/osanwe-wayfinder-round-2.pptx";
const ASSET_DIR = "/Users/jonahelliott/WORKSPACE/Osanwe/docs/pitch/round-2/assets";

const W = 1280;
const H = 720;
const FONT = "Arial";
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const INK = "#EDEDED";
const MUTED = "#A1A1A1";
const DIM = "#666666";
const GRID = "#262626";
const GRID_LIGHT = "#D8D8D8";
const GREEN = "#65D49A";

async function imageBytes(filename) {
  return new Uint8Array(await fs.readFile(`${ASSET_DIR}/${filename}`));
}

async function writeBlob(path, blob) {
  await fs.writeFile(path, new Uint8Array(await blob.arrayBuffer()));
}

function box(slide, name, position, fill, lineFill = fill, lineWidth = 0, geometry = "rect") {
  return slide.shapes.add({
    geometry,
    name,
    position,
    fill,
    line: { style: "solid", fill: lineFill, width: lineWidth },
  });
}

function textBox(slide, name, text, position, options = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontSize: options.fontSize ?? 24,
    bold: options.bold ?? false,
    color: options.color ?? WHITE,
    typeface: options.typeface ?? FONT,
    alignment: options.alignment ?? "left",
    verticalAlignment: options.verticalAlignment ?? "top",
    wrap: "square",
    autoFit: "none",
    insets: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  return shape;
}

function rule(slide, name, left, top, width, color = GRID, height = 1) {
  return box(slide, name, { left, top, width, height }, color);
}

function addChrome(slide, number, dark = true) {
  const fg = dark ? WHITE : BLACK;
  const line = dark ? GRID : GRID_LIGHT;
  textBox(slide, `brand-${number}`, "OSANWE / WAYFINDER", { left: 48, top: 26, width: 300, height: 26 }, {
    fontSize: 15,
    bold: true,
    color: fg,
  });
  textBox(slide, `round-${number}`, "ACU / ROUND 2", { left: 980, top: 26, width: 252, height: 26 }, {
    fontSize: 15,
    color: dark ? MUTED : DIM,
    alignment: "right",
  });
  rule(slide, `top-rule-${number}`, 48, 64, 1184, line);
  rule(slide, `left-grid-${number}`, 48, 64, 1, line, 604);
  rule(slide, `center-grid-${number}`, 640, 64, 1, line, 604);
  rule(slide, `right-grid-${number}`, 1231, 64, 1, line, 604);
  rule(slide, `bottom-rule-${number}`, 48, 668, 1184, line);
  textBox(slide, `page-${number}`, String(number).padStart(2, "0"), { left: 1178, top: 682, width: 54, height: 22 }, {
    fontSize: 13,
    color: dark ? DIM : "#8A8A8A",
    alignment: "right",
  });
}

function addScreenshot(slide, name, bytes, position, alt, crop = undefined) {
  box(slide, `${name}-backing`, {
    left: position.left - 1,
    top: position.top - 1,
    width: position.width + 2,
    height: position.height + 2,
  }, "#0A0A0A", "#3A3A3A", 1);
  return slide.images.add({
    blob: bytes,
    contentType: "image/png",
    alt,
    fit: "cover",
    position,
    crop,
    geometry: "rect",
  });
}

function setNotes(slide, script, sources) {
  slide.speakerNotes.textFrame.setText(`${script}\n\n[Sources]\n${sources.map((s) => `- ${s}`).join("\n")}\n[/Sources]`);
  slide.speakerNotes.setVisible(true);
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const [story, before, recommendation] = await Promise.all([
    imageBytes("new-city-connection-story.png"),
    imageBytes("wayfinder-before.png"),
    imageBytes("wayfinder-recommendation.png"),
  ]);

  const presentation = Presentation.create({ slideSize: { width: W, height: H } });

  // Slide 1 — sparse thesis cover.
  {
    const slide = presentation.slides.add();
    slide.background.fill = BLACK;
    addChrome(slide, 1, true);
    textBox(slide, "thesis-kicker", "PARTICIPANT-OWNED PERSONALIZATION", { left: 80, top: 112, width: 510, height: 28 }, {
      fontSize: 16,
      bold: true,
      color: MUTED,
    });
    const title = textBox(slide, "thesis-title", "Your behavior is already\nbeing modeled.", { left: 80, top: 176, width: 1090, height: 210 }, {
      fontSize: 72,
      bold: true,
      color: WHITE,
    });
    const subtitle = textBox(slide, "thesis-subtitle", "The objective just is not your flourishing.", { left: 80, top: 448, width: 1040, height: 78 }, {
      fontSize: 42,
      color: WHITE,
    });
    subtitle.text.get("your flourishing").color = GREEN;
    textBox(slide, "founder-line", "JONAH ELLIOTT  /  TWO-MINUTE PITCH", { left: 80, top: 602, width: 500, height: 24 }, {
      fontSize: 14,
      color: MUTED,
    });
    setNotes(
      slide,
      "Your behavior is already being modeled. The objective just is not your flourishing.\n\nTechnology companies learn which signals predict a click, purchase, or another minute on-screen. I want to turn that system around: a personal model that works for the person.",
      [
        "Internal claim boundary: docs/research/adtech-to-flourishing-evidence-audit.md.",
        "Visual direction: https://vercel.com/ (official homepage, accessed 2026-08-26).",
      ],
    );
  }

  // Slide 2 — human story, split field.
  {
    const slide = presentation.slides.add();
    slide.background.fill = BLACK;
    addChrome(slide, 2, true);
    textBox(slide, "problem-title", "More plans are not the same\nas more connection.", { left: 80, top: 112, width: 530, height: 150 }, {
      fontSize: 52,
      bold: true,
      color: WHITE,
    });
    textBox(slide, "problem-copy", "New city. More invitations.\nStill unsure what will actually help.", { left: 80, top: 332, width: 470, height: 108 }, {
      fontSize: 28,
      color: INK,
    });
    rule(slide, "problem-accent", 80, 486, 64, GREEN, 3);
    textBox(slide, "problem-outcome", "The outcome is not another chat.\nIt is a better decision in real life.", { left: 80, top: 514, width: 480, height: 84 }, {
      fontSize: 21,
      color: MUTED,
    });
    slide.images.add({
      blob: story,
      contentType: "image/png",
      alt: "Illustrative scene of a socially tired young adult at a gathering",
      fit: "cover",
      crop: { left: 0.34, top: 0, right: 0.02, bottom: 0 },
      position: { left: 672, top: 96, width: 528, height: 540 },
      geometry: "rect",
    });
    box(slide, "story-frame", { left: 671, top: 95, width: 530, height: 542 }, "none", "#3A3A3A", 1);
    setNotes(
      slide,
      "Start with someone who moved to a new city. They meet people and keep saying yes, but still feel disconnected. After a draining night, should they force another event, stay home, or follow up with the one person who felt promising?\n\nGeneric advice cannot know. And another chatbot conversation is not the outcome.",
      [
        "Scenario is explicitly hypothetical and mirrors the synthetic prototype fixture.",
        "Illustration generated for this deck; it does not depict a real participant or outcome.",
        "Visual direction: https://vercel.com/ (official homepage, accessed 2026-08-26).",
      ],
    );
  }

  // Slide 3 — built input and control boundary.
  {
    const slide = presentation.slides.add();
    slide.background.fill = BLACK;
    addChrome(slide, 3, true);
    textBox(slide, "input-kicker", "WORKING PROTOTYPE / SYNTHETIC SCENARIO", { left: 80, top: 102, width: 480, height: 26 }, {
      fontSize: 15,
      bold: true,
      color: GREEN,
    });
    textBox(slide, "input-title", "Wayfinder starts with\nsignals you choose.", { left: 80, top: 154, width: 480, height: 128 }, {
      fontSize: 50,
      bold: true,
      color: WHITE,
    });
    textBox(slide, "input-copy", "Reflection. Relationship events.\nOptional recovery data.", { left: 80, top: 332, width: 450, height: 82 }, {
      fontSize: 26,
      color: INK,
    });
    rule(slide, "input-accent", 80, 486, 64, GREEN, 3);
    textBox(slide, "input-boundary", "The LLM proposes evidence.\nThe participant can inspect and correct it.", { left: 80, top: 514, width: 450, height: 76 }, {
      fontSize: 20,
      color: MUTED,
    });
    addScreenshot(
      slide,
      "input-screen",
      before,
      { left: 604, top: 104, width: 596, height: 532 },
      "Wayfinder working prototype showing consented recovery signals and a participant reflection",
      { left: 0, top: 0.02, right: 0, bottom: 0.02 },
    );
    setNotes(
      slide,
      "Wayfinder begins with signals the participant chooses: a short reflection, a few relationship events, and optional recovery data.\n\nThe language model only turns words into inspectable evidence. A separate model updates an uncertain personal state. Every meaningful inference shows its source and can be corrected.",
      [
        "Working prototype screenshot captured from origin/feat/two-minute-wayfinder-demo; synthetic data is visibly labeled.",
        "Product boundary: docs/specs/two-minute-demo-v0.1.md on the demo branch and docs/specs/wayfinder-production-alpha-prd-v0.1.md.",
      ],
    );
  }

  // Slide 4 — explanation and action.
  {
    const slide = presentation.slides.add();
    slide.background.fill = BLACK;
    addChrome(slide, 4, true);
    textBox(slide, "output-kicker", "ONE CORRECTABLE EXPLANATION", { left: 80, top: 102, width: 420, height: 26 }, {
      fontSize: 15,
      bold: true,
      color: GREEN,
    });
    textBox(slide, "output-title", "Capacity,\nnot avoidance.", { left: 80, top: 154, width: 440, height: 148 }, {
      fontSize: 58,
      bold: true,
      color: WHITE,
    });
    textBox(slide, "output-action", "Protect tonight.\nKeep tomorrow warm.", { left: 80, top: 356, width: 440, height: 96 }, {
      fontSize: 30,
      color: INK,
    });
    rule(slide, "output-accent", 80, 500, 64, GREEN, 3);
    textBox(slide, "output-control", "One bounded next step.\nNothing is sent automatically.", { left: 80, top: 528, width: 440, height: 68 }, {
      fontSize: 20,
      color: MUTED,
    });
    addScreenshot(
      slide,
      "recommendation-screen",
      recommendation,
      { left: 560, top: 104, width: 640, height: 532 },
      "Wayfinder working prototype showing a correctable state explanation and one user-controlled recommendation",
      { left: 0.015, top: 0.02, right: 0.015, bottom: 0.02 },
    );
    setNotes(
      slide,
      "In this working prototype, the model notices that interest in connection is intact, but capacity is down. Instead of ‘socialize more,’ it offers one bounded next step: protect tonight, then send a low-pressure coffee invitation tomorrow—in your own words.\n\nNothing is sent automatically. What happened next becomes new evidence.",
      [
        "Working prototype screenshot captured from origin/feat/two-minute-wayfinder-demo; the participant and data are synthetic.",
        "Recommendation boundary: docs/specs/two-minute-demo-v0.1.md and docs/specs/wayfinder-production-alpha-prd-v0.1.md.",
      ],
    );
  }

  // Slide 5 — close on the human outcome and next milestone.
  {
    const slide = presentation.slides.add();
    slide.background.fill = BLACK;
    addChrome(slide, 5, true);
    textBox(slide, "close-kicker", "NEXT / PRIVATE LONGITUDINAL ALPHA", { left: 80, top: 112, width: 460, height: 28 }, {
      fontSize: 16,
      bold: true,
      color: MUTED,
    });
    const close = textBox(slide, "close-title", "More human connection.\nLess AI dependence.", { left: 80, top: 190, width: 1080, height: 198 }, {
      fontSize: 70,
      bold: true,
      color: WHITE,
    });
    close.text.get("human connection").color = GREEN;
    rule(slide, "close-rule", 80, 466, 1120, GRID);
    textBox(slide, "close-one", "01  CONSENT", { left: 80, top: 506, width: 280, height: 26 }, {
      fontSize: 16,
      bold: true,
      color: WHITE,
    });
    textBox(slide, "close-one-copy", "Every source chosen and revocable.", { left: 80, top: 542, width: 300, height: 46 }, {
      fontSize: 18,
      color: MUTED,
    });
    textBox(slide, "close-two", "02  CORRECTION", { left: 454, top: 506, width: 280, height: 26 }, {
      fontSize: 16,
      bold: true,
      color: WHITE,
    });
    textBox(slide, "close-two-copy", "Evidence and inferences remain inspectable.", { left: 454, top: 542, width: 300, height: 46 }, {
      fontSize: 18,
      color: MUTED,
    });
    textBox(slide, "close-three", "03  REAL LIFE", { left: 828, top: 506, width: 280, height: 26 }, {
      fontSize: 16,
      bold: true,
      color: WHITE,
    });
    textBox(slide, "close-three-copy", "Success happens outside the product.", { left: 828, top: 542, width: 300, height: 46 }, {
      fontSize: 18,
      color: MUTED,
    });
    setNotes(
      slide,
      "This is not a diagnosis, and the prototype uses synthetic data.\n\nThe next milestone is a private longitudinal alpha that remembers consent, corrections, and outcomes across days. The first market is people navigating social transitions and partners who already care about belonging.\n\nThe goal is not more time with AI. It is stronger human relationships—and less need for the system over time.",
      [
        "Production-alpha milestone and guardrails: docs/specs/wayfinder-production-alpha-prd-v0.1.md.",
        "Market and channel language is explicitly a hypothesis; it has not been validated.",
        "Visual direction: https://vercel.com/ (official homepage, accessed 2026-08-26).",
      ],
    );
  }

  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(`${OUT_DIR}/${stem}.png`, await presentation.export({ slide, format: "png", scale: 2 }));
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(`${OUT_DIR}/${stem}.layout.json`, await layout.text());
  }

  await writeBlob(`${OUT_DIR}/montage.webp`, await presentation.export({ format: "webp", montage: true, scale: 1 }));
  const inspect = await presentation.inspect({ kind: "slide,textbox,shape,image,notes", maxChars: 20000 });
  await fs.writeFile(`${OUT_DIR}/inspect.ndjson`, inspect.ndjson);

  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(FINAL_PPTX);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
