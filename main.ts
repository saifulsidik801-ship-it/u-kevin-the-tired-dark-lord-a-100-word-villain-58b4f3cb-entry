// Kevin: 100-word villain monologue — writes the entry to /output/entry.txt (1-600 chars).
// Judge scores the monologue alone; the tiredness lives in the rhythm, not in stating it.
// The Tired Dark Lord: A 100-Word Villain Monologue
// make.fun bounty u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
//
// The entry program writes one monologue of about 100 words to
// /output/entry.txt. The speaker is Lord Veylan of the Ashen Spire,
// seven sieges into a war against Aldergate that stopped being a
// sprint a long time ago. His tiredness lives in the rhythm —
// short sentences, trails off, orders reversed mid-breath —
// never in a plain statement that he is weary.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE =
  "The seventh siege of Aldergate. The ravens brought the same reports — " +
  "same rain, same mud, same little banners on the same little wall — " +
  "and I read them twice. My generals wait in the hall with their maps. " +
  "I remember when this war was a sprint. I had a horse then. A fast one. " +
  "Now I have a chair, and the chair has a dent shaped exactly like me. " +
  "Burn the granaries, spare the library — no. Spare the granaries. " +
  "Bring me the porridge. Cold again. Aldergate falls by Thursday, or it " +
  "doesn't. Sound the horns. Softly. My head.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = MONOLOGUE.trim();
if (text.length < 1 || text.length > 600) {
  throw new Error(`entry.txt must be 1-600 characters, got ${text.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
