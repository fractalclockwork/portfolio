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
  "numerator",
  "denominator",
  "quotient",
];

/** Cyclical / reduplicative tokens (banana-class loops). */
const cyclical = [
  "banana",
  "bananna",
  "murmur",
  "cancan",
  "nana",
  "paprika",
  "tumtum",
  "tango",
  "bonbon",
  "couscous",
  "berber",
  "gaga",
];

/** Math / LaTeX-flavored tokens. */
const mathTokens = [
  "\\frac",
  "reduce",
  "numerator",
  "denominator",
  "quotient",
  "cancel",
  "simplify",
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
  "reduces",
  "loops",
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
  "cyclical",
  "reduced",
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

function nounish(): string {
  const roll = Math.random();
  if (roll < 0.28) return pick(cyclical);
  if (roll < 0.4) return pick(mathTokens);
  return pick(nouns);
}

/** One nonsensical but vaguely technical-coastal / cyclical / math sentence. */
export function randomWordSalad(): string {
  const pattern = Math.floor(Math.random() * 5);
  switch (pattern) {
    case 0:
      return `${pick(adjectives)} ${nounish()} ${pick(verbs)} ${pick(connectors)} the ${nounish()}.`;
    case 1:
      return `${nounish()} ${pick(verbs)} ${pick(adjectives)} ${nounish()} ${pick(connectors)} ${nounish()}.`;
    case 2:
      return `The ${pick(adjectives)} ${nounish()} ${pick(verbs)}; ${nounish()} ${pick(verbs)} ${pick(connectors)} ${nounish()}.`;
    case 3:
      return `${pick(cyclical)} ${pick(verbs)} ${pick(mathTokens)} ${pick(connectors)} ${pick(cyclical)}.`;
    default:
      return `${pick(verbs)} the ${pick(adjectives)} ${nounish()} ${pick(connectors)} ${pick(adjectives)} ${nounish()}.`;
  }
}

/** Random interval between 3 and 5 seconds (inclusive range in ms). */
export function saladIntervalMs(): number {
  return 3000 + Math.floor(Math.random() * 2001);
}
