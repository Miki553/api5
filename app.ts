import express from "express";
// const express = require("express");


export const app = express();
app.use("/", (req, res) => {
  res.send("Hello World!!!");
});