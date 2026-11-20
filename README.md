# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/ixciamakima/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/ixciamakima/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 20-second vertical cut of Grand Theft Auto VI Trailer 2: the airboat chase across Leonida's swamps, cut to 9:16 for YouTube Shorts, closing with a pitch to make clips like this with AI and earn money on make.fun. The video itself is published on YouTube by the entrant; this repository only hands the grader its address in `VIDEO.json`.

## The clip

- Source: Grand Theft Auto VI Trailer 2, downloaded from Rockstar's official media page (`rockstargames.com/VI/media/videos`) as the clean 4K master, no YouTube compression.
- Moment: the chase climax, trailer time 2:19–2:39 — the airboat tearing through the swamp at golden hour, the night getaway, the aerial boat shot, and the Vice City skyline.
- Cut: `ffmpeg`, trimmed to the moment, cropped full-bleed to 1080×1920, under a minute so it publishes as a Short. The make.fun pitch runs as on-screen text over the last eight seconds: "Make clips like this / with AI and earn money / on make.fun — make.fun/bounty/gta6-clipper-01".

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=z00wg8vw&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
