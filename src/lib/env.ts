// 下記を参考にした。
// https://github.com/motdotla/dotenv/blob/master/examples/typescript/src/index.ts
import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "../../.env") });
