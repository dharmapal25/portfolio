const express = require("express");
const aiResponse = require("../controllers/ai.controller");

const aiRoute = express.Router();

aiRoute.post("/me",aiResponse);


module.exports = aiRoute