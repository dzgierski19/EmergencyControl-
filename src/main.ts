import express from "express";

export const app = express();
const port = 8500;

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
