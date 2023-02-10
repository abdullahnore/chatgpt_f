const express = require("express");
const route = express.Router();
require("dotenv").config({ path: __dirname + "/.env" });
const { chatResponse } = require("../controller/chatApi");

route.post("/chatApi", async (req, res) => {
  //http://localhost:8080/chatApi
  try {
    let ressult = await chatResponse(req.body.question);
    console.log(ressult);
    res.json(ressult);
  } catch (error) {
    res.json(error);
  }
});
module.exports = route;
