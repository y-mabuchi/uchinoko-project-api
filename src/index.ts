import { initializeApp } from "./config/initializer"; //初期化
import { usersIndex } from "./controller/users";
import { userCreate, validateStoreCreate } from "./controller/users/create";
const env = process.env;

(async () => {
    const { app, db } = await initializeApp();
    app.get("/", (req, res, next): void => {
        res.send(`<h1>Hello World</h1>`);
    })
    // fetch all users
    // curl -X GET 'http://localhost:8080/api/users'
    app.get("/api/users", usersIndex(db));
    // curl -X POST -H "Content-Type: application/json" -d '{"firstName":"my shop name", "lastName":"Fast Food", "age":25}' "http://localhost:8080/api/users"
    app.post("/api/users", validateStoreCreate, userCreate(db))

    app.listen(process.env.APP_PORT, () => {
        console.log(`Node Server started! port ${env.PORT || env.APP_PORT}`);
    });
})();

/* これは何に使っているか不明 */
// export type App = ReturnType<typeof initializeApp>;
