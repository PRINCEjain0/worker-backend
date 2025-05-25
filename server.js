import express from "express";
console.log("Starting worker...");
import "./worker.js";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("worker running");
});

app.listen(port, () => {
  console.log(`Worker running on port ${port}`);
});
