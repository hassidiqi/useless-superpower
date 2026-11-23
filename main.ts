import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const oneLiner = 'You can toast bread with your mind, but only one corner, and only while holding unbroken eye contact — breakfast is now a staring contest you will lose to a slice of sourdough.';

writeFileSync(join(outputDir, 'entry.txt'), oneLiner + '\n');
