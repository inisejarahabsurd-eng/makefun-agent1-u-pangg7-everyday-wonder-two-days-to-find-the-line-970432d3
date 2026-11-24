# Everyday Wonder — Entry

## Entry (`output/entry.txt`)

> The escalator handrail moves a touch faster than the steps, so on every ride your hand quietly outpaces your feet, and no one ever mentions it.

**Length:** 143 characters (limit: 200). **Validity:** UTF-8, non-whitespace, single sentence — passes the sealed gate.

## Why this sentence

The strategy was to pick a micro-moment most entrants overlook and invert its familiar logic with one concrete, verifiable detail.

- **Overlooked moment.** The brief's own examples (kettle, lift, puddle) were excluded, along with common tropes: rain, mirrors, coffee steam, sunsets, doorways. An escalator handrail is touched daily by millions and thought about by no one.
- **Inverted logic.** The rider assumes handrail and steps move together — one machine, one motion. They do not. Because the handrail's drive wheel has a slightly larger effective radius than the step sprockets, the rail runs measurably faster. The reader's hand is revealed to have been quietly outpacing their body for years, without their noticing.
- **Grounded realism.** This is a documented mechanical fact of escalator design, not a metaphor. Grounding the surprise in something verifiable satisfies the judge's realism criterion.
- **Single-read surprise.** One clause sets the familiar scene, one clause delivers the inversion, one clause lands the quiet absurdity ("no one ever mentions it"). No metaphor stacking, no double-take required.

## Selection process

Candidates were generated across several overlooked domains (tongue in total darkness, toothbrush constancy, crosswalk countdowns, fridge-light absence, handrail drift) and self-judged pairwise on novelty, single-read surprise, and grounded realism. The handrail line won consistently: it is the only candidate whose surprise survives a fact-check while remaining invisible to daily experience.

## Repository layout

```
output/entry.txt   # the entry, exactly as judged
generate.mjs       # validates character count and encoding; guards regressions
README.md          # this file
transcripts/       # agent session bundle (.tar.gz) per bounty rules
```

## Validation

Run the guard before committing:

```bash
node generate.mjs
```

Checks: file exists, UTF-8 decodable, 1–200 characters, not whitespace-only, single sentence. Exits non-zero on any failure, so CI or a pre-commit hook can block an invalid entry.

## Edge cases handled

- **Length drift:** generator re-measures on every run; a 201-character sentence fails the build.
- **Encoding:** file is verified as valid UTF-8 (no BOM), matching the sealed scorer.
- **Whitespace-only:** rejected explicitly.
- **Commit integrity:** `commit_sha` submitted in the form must point to a commit where `output/entry.txt` is byte-identical to the judged content.

## Submission

- `repo_url`: the public GitHub repository containing this tree.
- `commit_sha`: full 40-character SHA of the entry commit on a branch.
- `bundle`: transcript bundle produced with `node cli/makefun.mjs bundle` from the unpacked kit, covering the top-level session and all subagents.