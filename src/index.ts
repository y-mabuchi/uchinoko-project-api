import express, { Request, Response, NextFunction } from "express";
const port : string|number = process.env.PORT || 5000;

interface MesageRequest extends Request {
  body: {
    message: number
  }
}
const app = express();
app.use(express.json());

app.get("/", (req: MesageRequest, res: Response, next: NextFunction): void => {
  console.log(req.body.message)
  res.send(`<h1>Hello World</h1>`);
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

});

app.listen(port,() => console.log(`hosting @${port}`));

