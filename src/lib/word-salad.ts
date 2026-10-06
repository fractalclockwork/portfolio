/** Lexicon for the rotating La La Playa word salad. */
const nouns = [
  "tidepool",
  "coreplane",
  "phosphor",
  "hypergraph",
  "sandbar",
  "kernel",
  "mesa",
  "driftwood",
  "ringbuffer",
  "seagull",
  "slurm",
  "kelp",
  "oscilloscope",
  "piñata",
  "bitstream",
  "cabana",
  "DMA",
  "lighthouse",
  "CUDA",
  "hammock",
];

const verbs = [
  "compiles",
  "surfs",
  "rehydrates",
  "bench-tests",
  "muxes",
  "daydreams",
  "refactors",
  "tide-locks",
  "spices",
  "bootstraps",
  "drizzles",
  "vectorizes",
  "naps",
  "pipelines",
  "oscillates",
];

const adjectives = [
  "salt-fogged",
  "accelerator-aware",
  "sun-bleached",
  "zero-copy",
  "tide-shifted",
  "reproducible",
  "barnacle-rated",
  "low-latency",
  "coconut-adjacent",
  "fidelity-gated",
  "windward",
  "containerized",
  "sunstruck",
  "coincident-current",
  "beach-adjacent",
];

const connectors = [
  "amid",
  "via",
  "despite",
  "beneath",
  "across",
  "without",
  "toward",
  "beyond",
  "inside",
  "along",
];

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]!;
}

/** One nonsensical but vaguely technical-coastal sentence. */
export function randomWordSalad(): string {
  const pattern = Math.floor(Math.random() * 4);
  switch (pattern) {
    case 0:
      return `${pick(adjectives)} ${pick(nouns)} ${pick(verbs)} ${pick(connectors)} the ${pick(nouns)}.`;
    case 1:
      return `${pick(nouns)} ${pick(verbs)} ${pick(adjectives)} ${pick(nouns)} ${pick(connectors)} ${pick(nouns)}.`;
    case 2:
      return `The ${pick(adjectives)} ${pick(nouns)} ${pick(verbs)}; ${pick(nouns)} ${pick(verbs)} ${pick(connectors)} ${pick(nouns)}.`;
    default:
      return `${pick(verbs)} the ${pick(adjectives)} ${pick(nouns)} ${pick(connectors)} ${pick(adjectives)} ${pick(nouns)}.`;
  }
}

/** Random interval between 3 and 5 seconds (inclusive range in ms). */
export function saladIntervalMs(): number {
  return 3000 + Math.floor(Math.random() * 2001);
}
