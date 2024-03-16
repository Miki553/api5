import express from "express";
import{router as upload} from "./upload";



export const app = express();

app.use("/upload",upload)

app.use("/", (req, res) => {
  res.send("Hello World!!!");
});