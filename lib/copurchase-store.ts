import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "data", "copurchase.json");
type CoMap = Record<string, number>;

function ensureFile() {
  const dir = path.dirname(FILE_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify({}, null, 2), "utf8");
}

function readMap(): CoMap {
  ensureFile();
  return JSON.parse(fs.readFileSync(FILE_PATH, "utf8") || "{}");
}

function writeMap(map: CoMap) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(map, null, 2), "utf8");
}

function pairKey(a: number, b: number) {
  const [x, y] = [a, b].sort((m, n) => m - n);
  return `${x}|${y}`;
}

export function recordCoPurchase(productIds: number[]) {
  const unique = Array.from(new Set(productIds)).filter((x) => Number.isFinite(x));
  if (unique.length < 2) return;

  const map = readMap();

  for (let i = 0; i < unique.length; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      const k = pairKey(unique[i], unique[j]);
      map[k] = (map[k] ?? 0) + 1;
    }
  }

  writeMap(map);
}

export function getCartRecommendations(cartIds: number[], limit = 8) {
  const map = readMap();
  const cartSet = new Set(cartIds);
  const scores: Record<number, number> = {};

  for (const [key, count] of Object.entries(map)) {
    const [aStr, bStr] = key.split("|");
    const a = Number(aStr);
    const b = Number(bStr);

    const aIn = cartSet.has(a);
    const bIn = cartSet.has(b);

    if (aIn && !bIn) scores[b] = (scores[b] ?? 0) + count;
    if (bIn && !aIn) scores[a] = (scores[a] ?? 0) + count;
  }

  for (const id of cartSet) delete scores[id];

  return Object.entries(scores)
    .map(([id, score]) => ({ productId: Number(id), score }))
    .sort((x, y) => y.score - x.score)
    .slice(0, limit);
}
