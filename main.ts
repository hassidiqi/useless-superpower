import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), 'You can toast bread with your eyes, but only the corner, and only while maintaining eye contact. Breakfast is now a staring contest.');
