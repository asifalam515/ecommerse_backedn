import express, { Request, Response } from "express";
import { router } from "./app/modules/Product/product.route";
const app = express();

app.use(express.json());
app.use("", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
export default app;
