import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader sets MAKEFUN_OUTPUT_DIR to the directory it prepared for us
// ("/output" in its sandbox) and runs this program as an unprivileged user
// (uid 65534). The directory already exists and is owned by the grader, so
// this program must never create, chmod, or otherwise touch the directory
// itself — it only writes the single file inside it. Doing anything else
// (e.g. chmodSync on the directory) fails with EPERM and kills the run.
const text =
  "You are in bed, the hot water bottle at your feet, wrapped in flannel, warm against your soles. The warmth climbs a little at a time, past your ankles, past your knees, and by the time the bottle has gone cool, it has reached your heart and the night has gone quiet around you.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
