import fs from "node:fs/promises";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const starter = "/Users/jonahelliott/WORKSPACE/Osanwe/tmp/round-2-therapy-deck/template-starter.pptx";
const output = "/Users/jonahelliott/WORKSPACE/Osanwe/docs/pitch/round-2/corvus-round-2-therapy-pitch.pptx";
const qaDir = "/Users/jonahelliott/WORKSPACE/Osanwe/tmp/round-2-therapy-deck/final-artifacts";
const mayaNightPath = "/Users/jonahelliott/WORKSPACE/Osanwe/tmp/round-2-therapy-deck/maya-night.png";
const mayaTherapyPath = "/Users/jonahelliott/WORKSPACE/Osanwe/tmp/round-2-therapy-deck/maya-therapy.png";
const productPath = "/Users/jonahelliott/WORKSPACE/Osanwe/tmp/round-2-therapy-deck/product-concept.png";

async function bytes(path) {
  const value = await fs.readFile(path);
  return value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
}

async function writeBlob(path, blob) {
  await fs.writeFile(path, new Uint8Array(await blob.arrayBuffer()));
}

function recordFor(records, slide, kind, name) {
  const match = records.find(
    (record) =>
      record.slide === slide &&
      record.kind === kind &&
      (name === undefined || record.name === name),
  );
  if (!match) throw new Error(`No ${kind} record on slide ${slide}${name ? ` named ${name}` : ""}`);
  return match;
}

function rewrite(presentation, records, slide, name, nextText) {
  const record = recordFor(records, slide, "textbox", name);
  const shape = presentation.resolve(record.id);
  shape.text = nextText;
}

function setBrand(presentation, records, slide, name) {
  const record = recordFor(records, slide, "textbox", name);
  const shape = presentation.resolve(record.id);
  shape.text.set([
    [
      {
        run: "CORVUS",
        textStyle: {
          fontSize: "11.25pt",
          typeface: "Arial",
          bold: true,
          color: "#FFFFFF",
        },
      },
    ],
  ]);
}

async function main() {
  await fs.mkdir(qaDir, { recursive: true });
  const presentation = await PresentationFile.importPptx(await FileBlob.load(starter));

  const before = await presentation.inspect({
    kind: "slide,textbox,shape,image,notes,layout",
    maxChars: 30000,
  });
  await fs.writeFile(`${qaDir}/before.ndjson`, before.ndjson, "utf8");
  const records = before.ndjson
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => JSON.parse(line));

  // Slide 1 - disclosure at 1:47 a.m.
  setBrand(presentation, records, 1, "brand-2");
  rewrite(presentation, records, 1, "round-2", "ACU / ROUND 2");
  rewrite(presentation, records, 1, "page-2", "01");
  rewrite(presentation, records, 1, "problem-title", "At 1:47 a.m.,\nMaya says it out loud.");
  rewrite(presentation, records, 1, "problem-copy", "The move. The breakup.\nThe panic she hides at work.");
  rewrite(presentation, records, 1, "problem-outcome", "The AI listens.\nThen Maya closes the app.");
  const nightImage = presentation.resolve(recordFor(records, 1, "image").id);
  nightImage.replace({
    blob: await bytes(mayaNightPath),
    contentType: "image/png",
    alt: "Synthetic composite of Maya sitting alone with her phone late at night",
    fit: "cover",
  });
  nightImage.crop = { left: 0.44, top: 0, right: 0.01, bottom: 0 };
  presentation.resolve(recordFor(records, 1, "slide").id).speakerNotes.textFrame.setText(`0:00-0:33

Here is the whole idea: Corvus turns an AI conversation into a path to the right therapist.

It is 1:47 in the morning, and Maya tells an AI the truth: she is not okay. She tells it about the move, the breakup, and the panic she hides at work - things she has never said out loud.

And the AI listens. For a minute, she feels less alone.

Then she closes the app.

[Sources]
- Internal script: docs/pitch/round-2/round-2-pitch-prep.md.
- Image is a fictional composite generated for this deck with the built-in image generator; it does not depict a real person or outcome.
[/Sources]`);

  // Slide 2 - the gap between disclosure and care.
  rewrite(presentation, records, 2, "brand-1", "CORVUS");
  rewrite(presentation, records, 2, "page-1", "02");
  rewrite(presentation, records, 2, "thesis-kicker", "THE DROP-OFF");
  rewrite(presentation, records, 2, "thesis-title", "The AI knows her story.\nHer therapist knows nothing.");
  rewrite(presentation, records, 2, "thesis-subtitle", "Getting help still means starting over.");
  rewrite(presentation, records, 2, "founder-line", "SEARCH  /  INSURANCE  /  INTAKE  /  RETELL");
  presentation.resolve(recordFor(records, 2, "slide").id).speakerNotes.textFrame.setText(`0:33-1:00

No therapist knows. No appointment exists. Nothing in her real life has changed.

And getting help means starting over: searching profiles, checking insurance and availability, guessing who might understand her, filling out forms, and paying to retell the hardest parts of her life to a stranger.

She already did the hardest part. She said what was wrong.

[Sources]
- Internal script: docs/pitch/round-2/round-2-pitch-prep.md.
- This slide states the product problem and makes no prevalence or outcome claim.
[/Sources]`);

  // Slide 3 - static, synthetic product concept.
  setBrand(presentation, records, 3, "brand-3");
  rewrite(presentation, records, 3, "round-3", "ACU / ROUND 2");
  rewrite(presentation, records, 3, "page-3", "03");
  rewrite(presentation, records, 3, "input-kicker", "PRODUCT CONCEPT / SYNTHETIC SCENARIO");
  rewrite(presentation, records, 3, "input-title", "She controls\nthe handoff.");
  rewrite(presentation, records, 3, "input-copy", "Review the manifest.\nEdit, delete, or withhold.");
  rewrite(presentation, records, 3, "input-boundary", "Maya chooses.\nThe system does not.");
  const productImage = presentation.resolve(recordFor(records, 3, "image").id);
  productImage.replace({
    blob: await bytes(productPath),
    contentType: "image/png",
    alt: "Synthetic Corvus product concept showing an editable manifest and a therapist suggestion",
    fit: "cover",
  });
  productImage.crop = { left: 0, top: 0, right: 0, bottom: 0 };
  presentation.resolve(recordFor(records, 3, "slide").id).speakerNotes.textFrame.setText(`1:00-1:29

With permission, Corvus turns what Maya shared into a manifest she controls: what happened, what she needs, and what matters.

She can edit it, delete anything, or keep it private.

Then Corvus matches her with vetted therapists who are licensed, available, affordable, and fit her needs.

Maya chooses. The system does not.

[Sources]
- Internal script: docs/pitch/round-2/round-2-pitch-prep.md.
- Product boundary: docs/specs/wayfinder-production-alpha-prd-v0.1.md.
- The interface is a synthetic static concept created for this pitch. It is not evidence of implemented functionality or matching performance.
[/Sources]`);

  // Slide 4 - the human handoff resolves the opening.
  rewrite(presentation, records, 4, "brand-4", "CORVUS");
  rewrite(presentation, records, 4, "round-4", "ACU / ROUND 2");
  rewrite(presentation, records, 4, "page-4", "04");
  rewrite(presentation, records, 4, "output-kicker", "THE HUMAN HANDOFF");
  rewrite(presentation, records, 4, "output-title", "The therapist starts\nwith context.");
  rewrite(presentation, records, 4, "output-action", "Maya still tells her story.\nShe just does not start from zero.");
  rewrite(presentation, records, 4, "output-control", "Maya starts\nwith a human.");
  const therapyImage = presentation.resolve(recordFor(records, 4, "image").id);
  therapyImage.replace({
    blob: await bytes(mayaTherapyPath),
    contentType: "image/png",
    alt: "Synthetic composite of Maya speaking with a therapist in a first session",
    fit: "cover",
  });
  therapyImage.crop = { left: 0.18, top: 0, right: 0.15, bottom: 0 };
  presentation.resolve(recordFor(records, 4, "slide").id).speakerNotes.textFrame.setText(`1:29-2:00

When Maya walks into her first session, the therapist already has the context she approved.

She still tells her story in her own voice. She just does not have to start from zero and hope they get it.

The therapist starts with context. Maya starts with a human.

People are already telling AI what is wrong. Corvus makes sure that conversation reaches someone who can actually help.

[Sources]
- Internal script: docs/pitch/round-2/round-2-pitch-prep.md.
- Image is a fictional composite generated for this deck using slide 1 as an identity reference; it does not depict a real person, therapist, session, or outcome.
[/Sources]`);

  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(`${qaDir}/${stem}.png`, await presentation.export({ slide, format: "png", scale: 2 }));
    await fs.writeFile(`${qaDir}/${stem}.layout.json`, await (await slide.export({ format: "layout" })).text());
  }

  await writeBlob(
    `${qaDir}/montage.webp`,
    await presentation.export({ format: "webp", montage: true, scale: 1 }),
  );

  const after = await presentation.inspect({
    kind: "slide,textbox,shape,image,notes,layout",
    maxChars: 40000,
  });
  await fs.writeFile(`${qaDir}/after.ndjson`, after.ndjson, "utf8");

  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(output);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
