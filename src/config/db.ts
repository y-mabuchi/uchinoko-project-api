/* package */
import "reflect-metadata";
import { createConnection } from "typeorm";
/* orm */
const ormConfig = require("../../ormconfig");

export const genConnection = async () => createConnection(ormConfig);
