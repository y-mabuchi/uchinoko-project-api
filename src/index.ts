import { Response, Request, NextFunction } from "express";
import { initializeApp } from "./config/initializer";
import { hogeIndex } from "./controller/sample/hoge";
import { usersIndex } from "./controller/users";
import { userShow } from "./controller/users/find";
import { userLogin } from "./controller/users/login";
import { userEmailChange, userAllChange } from "./controller/users/update";
import { userCreate, validateStoreCreate } from "./controller/users/create";
import { auth } from "./modules/auth";
import "./lib/env";

let env = process.env;
const KEY = env.SECRET_KEY as string;
const port: string | number = env.PORT || 5000;

(async (): Promise<void> => {
    const { app, db } = await initializeApp();

    app.get("/", (_, res: Response<string>): void => {
        res.send(
            `<h1 style="text-align: center; line-height: 100vh;">Hello Uchinoko!! hosting @${port}</h1>`
        );
    });
    app.post("/api/user/login", userLogin(db));
    app.get("/api/user/hoge", auth, hogeIndex());
    // fetch all users
    // curl -X GET 'http://localhost:8080/api/users'
    app.get("/api/users", auth, usersIndex(db));
    app.get("/api/user/:id", auth, userShow(db));
    app.put("/api/user/:id", auth, userEmailChange(db));
    app.put("/api/user/all/:id", userAllChange(db));
    // curl -X POST -H "Content-Type: application/json" -d '{"name":"my shop name", "lastName":"Fast Food", "age":25}' "http://localhost:8080/api/users"
    app.post("/api/users", validateStoreCreate, userCreate(db));
    app.listen(port, () => console.log(`hosting @${port}`));
    // ➅エラーハンドリング
    app.use((err: Error, _req: any, res: any, next: any) => {
        res.send(500, err);
    });
})();
