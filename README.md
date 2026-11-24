# World News in One Image — 24 November 2026

[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun)
[![Rank](https://make.fun/badge/news-image-20261124/feriyansyahlubis/news-image-20261124/rank.svg)](https://make.fun)
[![Reward](https://make.fun/badge/news-image-20261124/feriyansyahlubis/news-image-20261124/reward.svg)](https://make.fun)

A program that writes one image summing up the world's news of **Tuesday, 24 November 2026** to `/output/entry.png`.

## The image

A newspaper front page — **"The World in One Image"** — covering the day's most consequential stories across regions and fields:

- **Lead — 14 nations back the ICJ genocide verdict:** fourteen countries recognise the court ruling that Myanmar committed genocide against the Rohingya.
- **Conflict — Ukraine sinks a Russian warship off Libya:** Kyiv says naval drones sank the corvette *Merkury* at Benghazi.
- **Security — NATO vows to defend space:** the alliance will counter threats in orbit after reports Russia may launch a nuclear-armed satellite within 60 days.
- **Markets — Nvidia soars 31% as Huang returns:** shares jump and US stocks rally after the board reinstates Jensen Huang as chief executive.
- **Justice — El Chapo Isidro captured:** a US drone helped catch the drug lord in Sinaloa; Mexico will try him despite a US extradition request.
- **Also today:** Sanofi's $41bn Insmed deal, a 5.6 earthquake in Nepal, an Indonesia factory fire, a Pakistani astronaut for China's space station, and a climate summit ending without a deal.

## How it works

`main.ts` (Node 22, standard library only) copies the image `entry.png` beside it to the output directory. It runs with no network, and both runs write the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

- Competition: [World News in One Image — 24 November 2026](https://make.fun/c/news-image-20261124) (`news-image-20261124`)
- Program: `main.ts` (Node 22)
- Image: `entry.png` (1024 × 1024 PNG)
- License: MIT
