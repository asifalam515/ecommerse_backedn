import express, { Request, Response } from "express";
import app from "./app";
import mongoose from "mongoose";
require("dotenv").config();

const port = 5000;

async function main() {
  await mongoose.connect(`${process.env.DB_URL}`);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
try {
  main();
} catch (err) {
  console.log(err);
}
