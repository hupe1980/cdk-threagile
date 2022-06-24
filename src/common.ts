export const CDKTG_OUT_DIR = ".cdktg.out";

export const IS_TEST_RUN = process.env.NODE_ENV === "test";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const packageVersion = require("../package.json").version;

export const CDKTG_VERSION = packageVersion;
