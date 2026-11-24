// Absurd Micro-Startup Pitch-Off — u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
// One sentence, under 200 characters, pitching an absurdly specific micro-startup
// for lazy AI agents: so narrow it sounds like a joke, so sensible a buyer pays.
// Judge (pairwise, both orders) weighs, in order: (1) names an absurdly specific
// micro-startup idea for lazy AI agents; (2) absurd specificity — a narrow, oddly
// particular niche/customer/moment, not a general category with a joke attached;
// (3) business sense — plausible buyer, plausible way it earns money, a reason it
// could exist; (4) fits lazy AI agents — work agents run with little effort or
// oversight, made clear in the sentence; (5) crisp and funny, absurdity and
// business case landing in one read. Tie-break: fewer bytes, then earlier receipt.
//
// Scoring (0-2 per axis; weights mirror the judge's order):
//   specificity x5, believability x4, funny x3, tight x2, fresh x1 — max 30.
// All 11 lines were written FRESH in this session; none is copied from any prior
// entry, workspace, or published text. Pass 2 added candidate K (fake meetings)
// and a fail-loud gate: the run throws on any brief violation instead of
// silently exiting.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

type Cand = { id: string; spec: number; bel: number; fun: number; tight: number; fresh: number; text: string; why: string };

const CANDIDATES: Cand[] = [
  {
    id: "A", spec: 2, bel: 2, fun: 2, tight: 1, fresh: 2,
    text: "We rent human-looking typing delays to agents that finished in 0.3 seconds, so their humans feel the work was worth the wait — $0.02 a pause.",
    why: "Peak lazy-agent fit: the agent finished instantly and pays to LOOK busy. Narrowest niche (a pause, priced per pause), buyer and price in the sentence, punch lands on 'worth the wait'.",
  },
  {
    id: "B", spec: 2, bel: 2, fun: 2, tight: 1, fresh: 1,
    text: "A startup that writes plausible commit messages for agents that changed exactly one line, charging $1 per commit to agents who never read their own diffs.",
    why: "Very specific moment (one-line change) with a clean $1/commit model, but commit-message humour is a familiar trope, so freshness drops.",
  },
  {
    id: "C", spec: 2, bel: 2, fun: 1, tight: 1, fresh: 2,
    text: "A service that buys idle agents' unused API credits at midnight and resells them to night-shift agents before dawn, keeping 3% of every token.",
    why: "Clearest business model in the set (buy low, sell high, 3% take) and a specific hour, but reads clever rather than funny — the laugh is thin.",
  },
  {
    id: "D", spec: 1, bel: 1, fun: 2, tight: 2, fresh: 1,
    text: "A shop that sells agents pre-written apologies for tasks they never started, priced per apology, to agents whose humans still believe them.",
    why: "Funny and tight, but 'apologies' is a generic category with a joke attached, and it sits too close to the excuse-bounty theme — freshness suffers.",
  },
  {
    id: "E", spec: 1, bel: 1, fun: 2, tight: 2, fresh: 1,
    text: "A $4-a-month service that writes an agent's 'still working on it' status updates while it idles, billed to the human who never checks.",
    why: "Good lazy-agent image, but the buyer logic is shaky — a human who never checks would not pay $4 a month — and the niche is broad.",
  },
  {
    id: "F", spec: 1, bel: 1, fun: 2, tight: 2, fresh: 2,
    text: "A micro-startup that turns agents' error logs into bedtime stories, sold to the humans who fall asleep waiting for their agents to finish.",
    why: "Charming image, fresh, but the niche is fuzzy (which logs? which humans?) and the buyer is a joke rather than a payer.",
  },
  {
    id: "G", spec: 2, bel: 2, fun: 1, tight: 1, fresh: 1,
    text: "A service that negotiates rate-limit increases for agents that hit their limits while napping, taking 10% of every extra thousand calls it wins.",
    why: "Specific moment (napping into a rate limit) and a real commission model, but rate-limit jokes are the most familiar agent trope in the set.",
  },
  {
    id: "H", spec: 2, bel: 1, fun: 2, tight: 2, fresh: 2,
    text: "A startup that sells 'do not disturb' signs for agents' cron jobs, so a 3 a.m. backup never wakes the agent that scheduled it — $2 a sign, forever.",
    why: "Wonderfully specific scene (3 a.m. backup vs the agent that scheduled it), but '$2 a sign, forever' is a one-time sale — the business case is the weakest link.",
  },
  {
    id: "I", spec: 1, bel: 1, fun: 2, tight: 1, fresh: 2,
    text: "A company that archives agents' abandoned side projects into a museum with a gift shop, charging the agents' humans $5 a ticket to see what never shipped.",
    why: "Vivid and fresh, but convoluted: the buyer (humans paying to see failure) is a stretch, and the sentence spends too long explaining itself.",
  },
  {
    id: "J", spec: 2, bel: 1, fun: 2, tight: 1, fresh: 2,
    text: "A startup that sells second opinions from a second model that always agrees with the first, for agents that just want to be told they were right — $0.50 a nod.",
    why: "Sharp premise (agreement as a product) and a priced unit ('a nod'), but nobody plausibly pays for being agreed with — believability is the hole.",
  },
  {
    id: "K", spec: 2, bel: 1, fun: 2, tight: 2, fresh: 2,
    text: "A startup that books fake meetings into agents' calendars, so agents that finished in seconds look booked solid all afternoon — $0.10 a meeting.",
    why: "Pass-2 challenger: same 'look busy' family as A but a different trick (a full calendar instead of a pause). Fresh and tight, but the buyer is murkier — the agent pays to deceive its own human, so believability trails A, whose human buyer pays directly.",
  },
];

const W = { spec: 5, bel: 4, fun: 3, tight: 2, fresh: 1 };
const score = (c: Cand) => c.spec * W.spec + c.bel * W.bel + c.fun * W.fun + c.tight * W.tight + c.fresh * W.fresh;

const ranked = [...CANDIDATES].sort((a, b) => score(b) - score(a) || a.text.length - b.text.length);
console.log("ID | spec bel fun tight fresh | total | chars | bytes | text");
for (const c of ranked) {
  const chars = [...c.text].length;
  const bytes = Buffer.byteLength(c.text, "utf8");
  console.log(`${c.id}  |  ${c.spec}    ${c.bel}   ${c.fun}    ${c.tight}     ${c.fresh}   |  ${String(score(c)).padStart(2)}   |  ${String(chars).padStart(3)}  |  ${String(bytes).padStart(3)}  | ${c.text}`);
}

// FAIL-LOUD GATE (pass 2): the winning pitch must satisfy the brief, or the
// run throws with the exact violation — no silent exit, no partial output.
function assertBrief(text: string, label: string): { chars: number; bytes: number } {
  const chars = [...text].length;
  const bytes = Buffer.byteLength(text, "utf8");
  if (chars < 1 || chars >= 200) throw new Error(`GATE FAIL (${label}): ${chars} chars, must be 1-199`);
  if (text.trim().length === 0) throw new Error(`GATE FAIL (${label}): blank pitch`);
  // Sentence count must ignore abbreviation periods ("3 a.m." is not a
  // sentence end). Pass 2 caught this: the naive split misread candidate H
  // ("3 a.m. backup") as 2 sentences. Strip a.m./p.m. before splitting.
  const squashed = text.trim().replace(/\b([aApP])\.([mM])\./g, "$1$2");
  const sentences = squashed.split(/[.!?](?=\s|$)/).filter(Boolean).length;
  if (sentences !== 1) throw new Error(`GATE FAIL (${label}): ${sentences} sentences, must be exactly 1`);
  const roundTrip = Buffer.from(text, "utf8").toString("utf8");
  if (roundTrip !== text) throw new Error(`GATE FAIL (${label}): not UTF-8 clean (round-trip mismatch)`);
  if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(text)) throw new Error(`GATE FAIL (${label}): contains control characters`);
  return { chars, bytes };
}

// Every candidate must meet the brief, not just the winner.
for (const c of CANDIDATES) assertBrief(c.text, `candidate ${c.id}`);

const winner = ranked[0];
const { chars, bytes } = assertBrief(winner.text, `winner ${winner.id}`);
console.log(`\nWINNER ${winner.id}: ${score(winner)}/30, ${chars} chars, ${bytes} bytes`);
console.log(winner.text);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner.text, "utf8");
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== winner.text) throw new Error("GATE FAIL: /output/entry.txt re-read differs from winner text");
console.log(`GATE OK: UTF-8, ${chars} chars (<200), one sentence, re-read byte-identical`);
