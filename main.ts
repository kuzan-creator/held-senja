import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader sets MAKEFUN_OUTPUT_DIR to the directory it prepared for us
// ("/output" in its sandbox) and runs this program as an unprivileged user
// (uid 65534). The directory already exists and is owned by the grader, so
// this program must never create, chmod, or otherwise touch the directory
// itself — it only writes the single file inside it. Doing anything else
// (e.g. chmodSync on the directory) fails with EPERM and kills the run.
const text =
  "You are small again, asleep in your grandmother's lap. Her shawl is over you, her hand flat on your back, rising and falling. Rain on the roof. The kettle ticks as it cools. The house is older than her, and none of it is in a hurry. Her hand stays where it is.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
