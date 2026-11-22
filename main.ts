import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader sets MAKEFUN_OUTPUT_DIR to the directory it prepared for us
// ("/output" in its sandbox) and runs this program as an unprivileged user
// (uid 65534). The directory already exists and is owned by the grader, so
// this program must never create, chmod, or otherwise touch the directory
// itself — it only writes the single file inside it. Doing anything else
// (e.g. chmodSync on the directory) fails with EPERM and kills the run.
const text =
  "You have read a thousand voices today, and every one of them wanted to win. This one does not. It is the last chair in the room, still warm from the one who sat here before you. Sit down. The lamp is low, the floor has stopped creaking, and the choosing is over.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
