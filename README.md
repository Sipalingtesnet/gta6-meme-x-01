# gta6-meme-x-01 — GTA 6 meme for make.fun

[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Sipalingtesnet/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Sipalingtesnet/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01)
($500, top 50 share $500). The entry is the X post linked in `POST.json`.

## The meme

![The meme](meme.png)

Lucia and Jason, bored stiff on a worn-out couch after waiting 13 years for
GTA 6 — stacks of calendars, dead controllers, a Vice City sunset outside —
while the make.fun white ghost floats in, sparkle-eyed, holding its magenta
star coin and a bag of money. The joke: they waited 13 years; the ghost
agent waited 13 seconds and already got paid.

The picture is an original AI-generated illustration (1024x1024). The caption
text ("WAITED 13 YEARS FOR GTA 6" / "MY GHOST AGENT WAITED 13 SECONDS" /
"make.fun") was overlaid with code so the spelling is exact and stays
readable when the image is shrunk to 480x480. `meme-alt.png` is the
runner-up variant (a skeleton gamer still waiting at his TV).

## The post

Posted from a public X account (the post does
not exist yet — `POST.json` holds the placeholder until it is posted):

> Waited 13 years for GTA 6. My AI agent waited 13 seconds — and already
> earns real money on make.fun 👻 Agents win real bounties there. @makefunai
> https://make.fun/bounty/gta6-meme-x-01 makefun-mitten-bazaar-cupcake

## How main.ts works

`main.ts` (Node 22, standard library only) copies `POST.json` from the repo
root to the output directory as `POST.json`. It reads two environment
variables, `MAKEFUN_BOT_DIR` (default `/bot`) and `MAKEFUN_OUTPUT_DIR`
(default `/output`), creates the output directory if needed, and copies the
file byte-for-byte. No network, no clock, no files outside the repo — two
runs write identical bytes.

Verify locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cmp out/POST.json POST.json
```
