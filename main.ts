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
// All 10 lines were written FRESH in this session; none is copied from any prior
// entry, workspace, or published text.

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

const winner = ranked[0];
const chars = [...winner.text].length;
const bytes = Buffer.byteLength(winner.text, "utf8");
console.log(`\nWINNER ${winner.id}: ${score(winner)}/30, ${chars} chars, ${bytes} bytes`);
console.log(winner.text);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner.text, "utf8");
const back = readFileSync("/output/entry.txt", "utf8");
const oneSentence = back.trim().split(/[.!?](?=\s|$)/).filter(Boolean).length === 1;
const gateOk = back === winner.text && chars >= 1 && chars < 200 && chars === [...back].length && back.trim().length > 0 && oneSentence;
console.log(`GATE ${gateOk ? "OK" : "FAIL"}: UTF-8, ${chars} chars (<200), one sentence: ${oneSentence}, re-read byte-identical: ${back === winner.text}`);
if (!gateOk) process.exit(1);
