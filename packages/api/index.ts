import express from "express";
const app = express();
const port = 5000;

app.get("/", (_: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
