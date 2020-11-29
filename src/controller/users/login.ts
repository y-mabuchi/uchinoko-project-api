/* package */
import { Request, Response } from "express";
import { Connection } from "typeorm";
import jwt from "jsonwebtoken";
/* entiry */
import { User } from "../../entity/User";
/* response */
import { sendError, sendOKAtToken } from "../../response";
/* env */
import "../../lib/env";

let env = process.env;
const KEY = env.SECRET_KEY as string;

export const userLogin = (db: Connection) => {
    return async (req: Request, res: Response) => {
        try {
            const payload = { id: req.body.id };
            const option = { expiresIn: "10d" }; /* 10日にしてみた */
            const token = jwt.sign(payload, KEY, option);
            return sendOKAtToken(res, "create token", token);
        } catch (e) {
            console.error(e);
            return sendError(res, 500, "error");
        }
    };
};
