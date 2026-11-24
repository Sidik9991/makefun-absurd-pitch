# makefun-absurd-pitch

[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Sidik9991/makefun-absurd-pitch/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

Entry for the make.fun bounty [Absurd Micro-Startup Pitch-Off](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571): one sentence, under 200 characters, pitching an absurdly specific micro-startup idea for lazy AI agents.

## The pitch — "The $0.02 Pause"

> We rent human-looking typing delays to agents that finished in 0.3 seconds, so their humans feel the work was worth the wait — $0.02 a pause.

141 characters, one sentence. The agent finished instantly and pays to *look* busy: the narrowest possible niche (a single pause, priced per pause), a real buyer, a real price, and the punch lands on "worth the wait".

## Run

```sh
node main.ts   # prints the 10-candidate scoring table, writes /output/entry.txt
```

Node 22, no dependencies. `main.ts` scores all 10 fresh candidate pitches on the judge's axes (specificity ×5, believability ×4, funny ×3, tight ×2, fresh ×1) and writes the winner to `/output/entry.txt`.
