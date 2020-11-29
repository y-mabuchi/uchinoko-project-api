import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import "../lib/env";
const env = process.env;
const KEY = env.SECRET_KEY as string;

export const auth = (req: any, _: Response, next: NextFunction) => {
    // リクエストヘッダーからトークンの取得
    let token = "";
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        token = req.headers.authorization.split(" ")[1];
    } else {
        return next("token none");
    }
    // トークンの検証
    jwt.verify(token, KEY, function (err, decoded) {
        if (err) {
            // 認証NGの場合
            next(err.message);
        } else {
            // 認証OKの場合
            req.decoded = decoded;
            next();
        }
    });
};
