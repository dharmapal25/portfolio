const express = require("express");
const aiRoute = require("./routes/ai.route");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"]
}))


app.use("/api", aiRoute);

module.exports = app